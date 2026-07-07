import { pickFields, safeArray } from "../utils/guards.mjs";

/**
 * Constructor de contexto.
 *
 * Convierte fuentes internas en un paquete minimo y util. Esta clase evita que
 * datos sin filtrar viajen a un proveedor de IA futuro.
 */
export class ZeninContextBuilder {
  constructor({ limits = {} } = {}) {
    this.limits = {
      checkins: 7,
      habits: 12,
      goals: 8,
      tools: 12,
      emotionalEntries: 10,
      ...limits
    };
  }

  build(sources = {}) {
    return {
      generatedAt: new Date().toISOString(),
      profile: pickFields(sources.profile || {}, ["name", "ageRange", "mainContext", "objectives", "preferences"]),
      recentState: this.buildRecentState(sources),
      habits: safeArray(sources.habits).slice(0, this.limits.habits).map((item) => pickFields(item, ["id", "title", "status", "updatedAt"])),
      goals: safeArray(sources.goals).slice(0, this.limits.goals).map((item) => pickFields(item, ["id", "title", "progress", "updatedAt"])),
      toolUsage: safeArray(sources.toolUsage).slice(0, this.limits.tools).map((item) => pickFields(item, ["key", "starts", "completions", "totalSeconds", "lastUsedAt"])),
      preferences: pickFields(sources.preferences || {}, ["language", "theme", "notificationPreference", "favoriteTools"]),
      memorySummary: sources.memorySummary || null,
      safety: {
        rawDataIncluded: false,
        externalProviderReady: true,
        requiresConsentCheck: true
      }
    };
  }

  buildRecentState(sources) {
    const checkins = safeArray(sources.checkins).slice(0, this.limits.checkins);
    const emotions = safeArray(sources.emotionalEntries).slice(0, this.limits.emotionalEntries);

    return {
      checkinCount: checkins.length,
      latestCheckinAt: checkins[0]?.createdAt || null,
      latestMood: emotions[0]?.mood || checkins[0]?.mood || null,
      latestStressLevel: emotions[0]?.stressLevel || checkins[0]?.stressLevel || null,
      emotionalTrend: sources.emotionalTrend || "unknown"
    };
  }
}
