import { clamp } from "../utils/guards.mjs";

/**
 * Motor de personalidad.
 *
 * Produce parametros de tono y longitud sin generar mensajes finales.
 */
export class ZeninPersonalityEngine {
  constructor({ config = {} } = {}) {
    this.config = config;
  }

  styleFor({ relationship = {}, emotion = {}, context = {} } = {}) {
    const traits = this.config.traits || {};
    const veteran = Number(relationship.daysKnown || 0) >= 30;
    const highStress = Number(context.recentState?.latestStressLevel || 0) >= 7;

    return {
      tone: highStress ? "calm-supportive" : emotion.name === "celebrating" ? "warm-celebratory" : "warm-natural",
      maxLength: veteran ? "short" : "medium",
      formality: clamp((traits.formality ?? 0.48) * 100, 0, 100),
      warmth: clamp((traits.empathy ?? 0.92) * 100, 0, 100),
      humorAllowed: (traits.humor ?? 0.22) > 0.18 && !highStress,
      initiative: clamp((traits.initiativeLevel ?? 0.36) * 100, 0, 100),
      avoid: this.config.communication || {},
      boundaries: this.config.boundaries || {}
    };
  }
}
