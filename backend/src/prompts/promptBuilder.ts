import type { ZeninContext } from "../types/context.js";

export class PromptBuilder {
  build(context: ZeninContext, userMessage: string, options: { avoidRepeating?: string } = {}): string {
    const profileSummary = {
      userId: context.userId,
      conversationId: context.conversationId,
      name: context.name,
      goals: context.goals,
      emotionalState: context.emotionalState,
      habits: context.habits,
      toolsUsed: context.toolsUsed,
      daysSinceLastSeen: context.daysSinceLastSeen,
      progress: context.progress,
      achievements: context.achievements,
      preferences: context.preferences,
      localDate: context.localDate,
      localTime: context.localTime
    };
    const clientContext = context.clientContext || {};
    return [
      "Perfil resumido del usuario:",
      JSON.stringify(profileSummary, null, 2),
      "Ultimos 15 mensajes de la conversacion:",
      JSON.stringify(context.conversationTurns.slice(-15), null, 2),
      "Ultimos registros y datos locales disponibles de ZENOVA:",
      JSON.stringify(clientContext, null, 2),
      "Resumen de memoria anterior:",
      context.historySummary || "sin resumen previo",
      options.avoidRepeating
        ? `Evita repetir esta respuesta anterior. Genera una version mas natural, especifica y conversacional:\n${options.avoidRepeating}`
        : "",
      "Mensaje nuevo del usuario:",
      userMessage,
      "Instruccion final:",
      "Responde solo JSON valido. No uses markdown. No agregues texto fuera del JSON. Usa el contexto cuando aporte valor y no inventes datos."
    ]
      .filter(Boolean)
      .join("\n\n");
  }
}
