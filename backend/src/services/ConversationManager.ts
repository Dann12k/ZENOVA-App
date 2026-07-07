import type { ZeninJsonResponse } from "../types/chat.js";
import type { MemoryConversation } from "../types/memory.js";

export class ConversationManager {
  limitContext(conversation: MemoryConversation, maxTurns = 15): MemoryConversation {
    return {
      ...conversation,
      turns: conversation.turns.slice(-maxTurns)
    };
  }

  buildCompactSummary(conversation: MemoryConversation, response: ZeninJsonResponse): string {
    const lastUser = [...conversation.turns].reverse().find((turn) => turn.role === "user")?.message || "";
    const fragments = [
      response.memorySummary,
      lastUser ? `Ultimo tema: ${lastUser.slice(0, 120)}` : "",
      response.suggestedTool ? `Herramienta sugerida: ${response.suggestedTool}` : ""
    ].filter(Boolean);
    return fragments.join(" | ").slice(0, 900);
  }
}
