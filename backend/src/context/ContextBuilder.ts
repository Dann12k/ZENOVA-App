import type { ContextBuilderInput, ZeninContext } from "../types/context.js";

export class ContextBuilder {
  build(input: ContextBuilderInput): ZeninContext {
    const { userMemory, conversation } = input;
    const now = new Date();
    return {
      userId: userMemory.userId,
      conversationId: conversation.id,
      name: userMemory.name || "Usuario",
      goals: userMemory.goals.slice(0, 8),
      emotionalState: userMemory.emotions.at(-1)?.value || "sin registro reciente",
      habits: userMemory.habits.slice(0, 10),
      toolsUsed: userMemory.tools.slice(0, 12).map((tool) => tool.key),
      historySummary: conversation.summary || userMemory.conversationSummaries[0] || "sin resumen previo",
      localTime: now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" }),
      localDate: now.toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" }),
      daysSinceLastSeen: daysSince(userMemory.lastSeenAt),
      progress: userMemory.progress.slice(-8).map((item) => ({ label: item.label, value: item.value })),
      achievements: userMemory.achievements.slice(0, 8),
      preferences: userMemory.preferences,
      conversationTurns: conversation.turns.slice(-15).map((turn) => ({
        role: turn.role,
        message: turn.message,
        createdAt: turn.createdAt
      })),
      clientContext: input.clientContext
    };
  }
}

function daysSince(iso: string | null): number | null {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return Math.max(0, Math.floor((Date.now() - date.getTime()) / 86400000));
}
