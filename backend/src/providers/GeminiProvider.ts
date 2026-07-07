import { env, hasGeminiApiKey } from "../config/env.js";
import { parseZeninJsonResponse } from "../models/zeninResponse.js";
import type { AIProvider, AIProviderRequest, AIProviderResult } from "../types/ai.js";
import { AIConfigurationError, AIProviderError } from "../utils/errors.js";

interface GeminiCandidate {
  content?: {
    parts?: Array<{ text?: string }>;
  };
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
  error?: {
    message?: string;
    code?: number;
    status?: string;
  };
}

const retryableStatusCodes = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
const maxAttempts = 2;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status: number): boolean {
  return retryableStatusCodes.has(status) || status >= 500;
}

function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === "AbortError";
}

export class GeminiProvider implements AIProvider {
  readonly name = "gemini";

  constructor(
    private readonly apiKey = env.geminiApiKey,
    private readonly model = env.geminiModel
  ) {}

  async generateJson(request: AIProviderRequest): Promise<AIProviderResult> {
    if (!hasGeminiApiKey()) {
      throw new AIConfigurationError(
        "La arquitectura esta lista. Para continuar necesito que el usuario agregue manualmente su API Key de Gemini en el archivo .env. Una vez configurada, continuare con las pruebas de integracion."
      );
    }

    try {
      const json = await this.requestWithRetry(request);

      const rawText = json.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
      if (!rawText) throw new AIProviderError("Gemini no devolvio contenido.");

      return {
        rawText,
        json: parseZeninJsonResponse(rawText),
        model: this.model,
        provider: this.name
      };
    } catch (error) {
      if (error instanceof AIConfigurationError || error instanceof AIProviderError) throw error;
      if (error instanceof Error && error.name === "AbortError") throw new AIProviderError("La solicitud a Gemini excedio el tiempo maximo.");
      throw new AIProviderError("No fue posible conectar con Gemini.");
    }
  }

  private async requestWithRetry(request: AIProviderRequest): Promise<GeminiResponse> {
    let lastError: unknown = null;
    const deadline = Date.now() + Math.max(1500, request.timeoutMs);
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      const remainingMs = deadline - Date.now();
      if (remainingMs <= 0) throw new AIProviderError("Gemini no respondio dentro del tiempo limite.");

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), remainingMs);
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(this.model)}:generateContent?key=${encodeURIComponent(this.apiKey)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: request.messages.map((message) => `[${message.role.toUpperCase()}]\n${message.content}`).join("\n\n")
                    }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.55,
                topP: 0.9,
                responseMimeType: "application/json",
                responseSchema: request.responseSchema
              }
            })
          }
        );

        const json = (await response.json().catch(() => ({}))) as GeminiResponse;
        if (response.ok) return json;
        if (!isRetryableStatus(response.status) || attempt === maxAttempts) {
          throw new AIProviderError(json.error?.message || `Gemini rechazo la solicitud (${response.status}).`);
        }
        lastError = new AIProviderError(json.error?.message || `Gemini no respondio correctamente (${response.status}).`);
      } catch (error) {
        lastError = error;
        if (isAbortError(error)) throw new AIProviderError("Gemini no respondio dentro del tiempo limite.");
        if (error instanceof AIProviderError && attempt === maxAttempts) throw error;
        if (error instanceof Error && attempt === maxAttempts) throw error;
      } finally {
        clearTimeout(timer);
      }
      const backoffMs = Math.min(350 * 2 ** (attempt - 1), Math.max(0, deadline - Date.now()));
      if (backoffMs > 0) await wait(backoffMs);
    }
    if (lastError instanceof Error) throw lastError;
    throw new AIProviderError("No fue posible conectar con Gemini.");
  }
}
