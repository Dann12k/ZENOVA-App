import { env } from "../config/env.js";
import { ContextBuilder } from "../context/ContextBuilder.js";
import { MemoryEngine } from "../memory/MemoryEngine.js";
import { createLocalZeninResponse, geminiResponseSchema } from "../models/zeninResponse.js";
import { ZENIN_PERSONALITY } from "../prompts/zeninPersonality.js";
import { PromptBuilder } from "../prompts/promptBuilder.js";
import { createAIProvider } from "../providers/providerFactory.js";
import { AIOrchestrator } from "../services/AIOrchestrator.js";
import { ConversationManager } from "../services/ConversationManager.js";
import { EmotionEngine } from "../services/EmotionEngine.js";
import { ToolEngine } from "../services/ToolEngine.js";
import type { ChatRequestBody, ChatResponseBody, ZeninJsonResponse } from "../types/chat.js";
import { AIProviderError } from "../utils/errors.js";
import { logger } from "../utils/logger.js";

export class ZeninBrain {
  constructor(
    private readonly memory = new MemoryEngine(),
    private readonly contextBuilder = new ContextBuilder(),
    private readonly promptBuilder = new PromptBuilder(),
    private readonly orchestrator = new AIOrchestrator(),
    private readonly conversationManager = new ConversationManager(),
    private readonly emotionEngine = new EmotionEngine(),
    private readonly toolEngine = new ToolEngine(),
    private readonly provider = createAIProvider()
  ) {}

  async chat(input: ChatRequestBody): Promise<ChatResponseBody> {
    await this.memory.rememberUserSignals(input.userId, input.message);
    await this.memory.appendUserTurn(input.userId, input.conversationId, input.message);

    const snapshot = await this.memory.snapshot(input.userId, input.conversationId);
    const conversation = this.conversationManager.limitContext(snapshot.conversation);
    const context = this.contextBuilder.build({
      userMemory: snapshot.user,
      conversation,
      message: input.message,
      clientContext: input.clientContext
    });

    const decision = this.orchestrator.decide(input.message);
    const zeninResponse = decision.needsAI
      ? await this.askProviderSafely(context, input.message)
      : this.localResponse(input.message, decision.reason);

    const emotion = this.emotionEngine.fromResponse(zeninResponse);
    const toolAction = this.toolEngine.fromResponse(zeninResponse);
    const responseWithUiHints: ZeninJsonResponse = {
      ...zeninResponse,
      memorySummary: this.conversationManager.buildCompactSummary(conversation, zeninResponse)
    };

    await this.memory.appendZeninTurn(input.userId, input.conversationId, responseWithUiHints.message, responseWithUiHints, decision.needsAI);

    const reducedMode = responseWithUiHints.memorySummary.toLowerCase().includes("modo reducido");
    return {
      ...responseWithUiHints,
      emotion: emotion.emotion,
      suggestedTool: toolAction?.key || responseWithUiHints.suggestedTool,
      conversationId: input.conversationId,
      usedAI: decision.needsAI && !reducedMode,
      provider: decision.needsAI && !reducedMode ? this.provider.name : "offline-fallback"
    };
  }

  private async askProviderSafely(context: ReturnType<ContextBuilder["build"]>, message: string): Promise<ZeninJsonResponse> {
    try {
      return await withTimeout(this.askProvider(context, message), env.geminiTimeoutMs + 1500);
    } catch (error) {
      logger.warn(
        "ZENIN entra en modo reducido por falla de Gemini.",
        {
          code: error instanceof AIProviderError ? error.code : "AI_UNEXPECTED_ERROR",
          message: error instanceof Error ? error.message : String(error)
        },
        "gemini"
      );
      return createReducedModeResponse();
    }
  }

  private async askProvider(context: ReturnType<ContextBuilder["build"]>, message: string): Promise<ZeninJsonResponse> {
    const prompt = this.promptBuilder.build(context, message);
    const result = await this.provider.generateJson({
      timeoutMs: env.geminiTimeoutMs,
      responseSchema: geminiResponseSchema,
      messages: [
        { role: "system", content: ZENIN_PERSONALITY },
        { role: "user", content: prompt }
      ]
    });
    const previousZeninMessage = [...context.conversationTurns].reverse().find((turn) => turn.role === "zenin")?.message || "";
    if (previousZeninMessage && isNearlySame(previousZeninMessage, result.json.message)) {
      const retryPrompt = this.promptBuilder.build(context, message, { avoidRepeating: previousZeninMessage });
      const retry = await this.provider.generateJson({
        timeoutMs: env.geminiTimeoutMs,
        responseSchema: geminiResponseSchema,
        messages: [
          { role: "system", content: ZENIN_PERSONALITY },
          { role: "user", content: retryPrompt }
        ]
      });
      return retry.json;
    }
    return result.json;
  }

  private localResponse(message: string, reason: string): ZeninJsonResponse {
    const normalized = message.trim().toLowerCase();
    if (/^(gracias|thanks|thank you)/.test(normalized)) {
      return createLocalZeninResponse("Me alegra acompanarte. Cuando quieras hablar mas, aqui estoy.");
    }
    if (/^(ok|okay|vale|listo|perfecto)/.test(normalized)) {
      return createLocalZeninResponse("Listo. Lo dejamos asi por ahora.");
    }
    return {
      message: "Puedo acompanarte con eso. Si quieres contarme un poco mas, lo revisamos con calma.",
      emotion: "calm",
      suggestedTool: "",
      priority: "low",
      celebrate: false,
      showConfetti: false,
      memorySummary: `Respuesta local por ${reason}.`
    };
  }
}

function isNearlySame(previous: string, next: string): boolean {
  const a = signature(previous);
  const b = signature(next);
  if (!a || !b) return false;
  if (a === b) return true;
  const aWords = new Set(a.split(" ").filter((word) => word.length > 3));
  const bWords = new Set(b.split(" ").filter((word) => word.length > 3));
  if (!aWords.size || !bWords.size) return false;
  const shared = [...aWords].filter((word) => bWords.has(word)).length;
  return shared / Math.min(aWords.size, bWords.size) > 0.78;
}

function signature(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<T>((_resolve, reject) => {
    timer = setTimeout(() => reject(new AIProviderError("Gemini no respondio dentro del tiempo limite.")), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

function createReducedModeResponse(): ZeninJsonResponse {
  return {
    message:
      "Estoy teniendo dificultades para comunicarme con mi motor de razonamiento. Podemos seguir conversando mientras recupero la conexion. Mientras tanto, puedo acompanarte con respiracion, registro emocional, seguimiento y herramientas de calma.",
    emotion: "empathetic",
    suggestedTool: "",
    priority: "medium",
    celebrate: false,
    showConfetti: false,
    memorySummary: "Respuesta en modo reducido por conexion Gemini no disponible."
  };
}
