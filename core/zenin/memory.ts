import {
  ZeninInsight,
  ZeninMemorySnapshot,
  ZeninPattern,
  ZeninRecommendation,
  ZeninStorageProvider,
  createInitialMemory,
  dayKey,
  hourKey,
  nowIso,
  safeJsonParse,
  uniqueBy
} from "./state";

export const ZENIN_MEMORY_KEY = "zenin.core.memory.v1";

export function createMemoryProvider(): ZeninStorageProvider {
  const values = new Map<string, string>();
  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
    removeItem(key) {
      values.delete(key);
    }
  };
}

export function createLocalStorageProvider(storage = globalThis.localStorage): ZeninStorageProvider {
  return {
    getItem(key) {
      return storage?.getItem(key) ?? null;
    },
    setItem(key, value) {
      storage?.setItem(key, value);
    },
    removeItem(key) {
      storage?.removeItem(key);
    }
  };
}

export class MemoryService {
  private cache: ZeninMemorySnapshot | null = null;

  constructor(
    private readonly provider: ZeninStorageProvider = createLocalStorageProvider(),
    private readonly key = ZENIN_MEMORY_KEY
  ) {}

  async load(): Promise<ZeninMemorySnapshot> {
    if (this.cache) return this.cache;
    const raw = await Promise.resolve(this.provider.getItem(this.key));
    const parsed = safeJsonParse<ZeninMemorySnapshot>(raw, createInitialMemory());
    this.cache = this.normalize(parsed);
    return this.cache;
  }

  async save(snapshot: ZeninMemorySnapshot): Promise<ZeninMemorySnapshot> {
    const normalized = this.normalize({ ...snapshot, updatedAt: nowIso() });
    this.cache = normalized;
    await Promise.resolve(this.provider.setItem(this.key, JSON.stringify(normalized)));
    return normalized;
  }

  async patch(patch: Partial<ZeninMemorySnapshot>): Promise<ZeninMemorySnapshot> {
    const current = await this.load();
    return this.save({ ...current, ...patch, updatedAt: nowIso() });
  }

  async appendEmotionalEntry(entry: unknown): Promise<void> {
    const memory = await this.load();
    await this.save({ ...memory, emotionalHistory: [...memory.emotionalHistory, entry] });
  }

  async appendToolUse(entry: unknown): Promise<void> {
    const memory = await this.load();
    await this.save({ ...memory, toolsUsed: [...memory.toolsUsed, entry] });
  }

  async registerActiveNow(date = new Date()): Promise<void> {
    const memory = await this.load();
    const activeDays = Array.from(new Set([...memory.activeDays, dayKey(date)]));
    const usageHours = { ...memory.usageHours };
    const hour = hourKey(date);
    usageHours[hour] = (usageHours[hour] || 0) + 1;
    await this.save({ ...memory, activeDays, usageHours });
  }

  async rememberPhrase(id: string, maxRecent = 120): Promise<void> {
    const memory = await this.load();
    const shownPhrases = [...memory.shownPhrases.filter((entry) => entry !== id), id].slice(-maxRecent);
    await this.save({ ...memory, shownPhrases });
  }

  async rememberAdvice(id: string, maxRecent = 160): Promise<void> {
    const memory = await this.load();
    const adviceGiven = [...memory.adviceGiven.filter((entry) => entry !== id), id].slice(-maxRecent);
    await this.save({ ...memory, adviceGiven });
  }

  async storePatterns(patterns: ZeninPattern[]): Promise<void> {
    const memory = await this.load();
    const next = uniqueBy([...patterns, ...memory.patterns], (pattern) => pattern.key).slice(0, 80);
    await this.save({ ...memory, patterns: next });
  }

  async storeInsights(insights: ZeninInsight[]): Promise<void> {
    const memory = await this.load();
    const next = uniqueBy([...insights, ...memory.observations], (insight) => insight.key).slice(0, 120);
    await this.save({ ...memory, observations: next });
  }

  async storeRecommendations(recommendations: ZeninRecommendation[]): Promise<void> {
    const memory = await this.load();
    const next = uniqueBy([...recommendations, ...memory.recommendations], (item) => item.toolKey).slice(0, 50);
    await this.save({ ...memory, recommendations: next });
  }

  async updateCollectionsFromEvent(kind: string, payload: unknown): Promise<void> {
    const memory = await this.load();
    const next = { ...memory };
    if (kind === "MOOD_REGISTERED" || kind === "CHECKIN_COMPLETED") {
      next.emotionalHistory = [...next.emotionalHistory, payload];
    }
    if (kind === "TOOL_STARTED" || kind === "TOOL_FINISHED") {
      next.toolsUsed = [...next.toolsUsed, payload];
    }
    if (kind === "HABIT_COMPLETED") {
      next.habits = [...next.habits, payload];
    }
    if (kind === "OBJECTIVE_CREATED" || kind === "OBJECTIVE_FINISHED" || kind === "GOAL_PROGRESS") {
      next.goals = [...next.goals, payload];
    }
    if (kind === "PROGRAM_FINISHED") {
      next.completedPrograms = [...next.completedPrograms, payload];
    }
    if (kind === "PROGRAM_ABANDONED") {
      next.abandonedPrograms = [...next.abandonedPrograms, payload];
    }
    await this.save(next);
  }

  async resetForTestsOnly(): Promise<void> {
    this.cache = null;
    await Promise.resolve(this.provider.removeItem?.(this.key));
  }

  private normalize(snapshot: Partial<ZeninMemorySnapshot>): ZeninMemorySnapshot {
    const base = createInitialMemory();
    return {
      ...base,
      ...snapshot,
      emotionalHistory: Array.isArray(snapshot.emotionalHistory) ? snapshot.emotionalHistory : base.emotionalHistory,
      toolsUsed: Array.isArray(snapshot.toolsUsed) ? snapshot.toolsUsed : base.toolsUsed,
      activeDays: Array.isArray(snapshot.activeDays) ? snapshot.activeDays : base.activeDays,
      absentDays: Array.isArray(snapshot.absentDays) ? snapshot.absentDays : base.absentDays,
      favoriteRoutines: Array.isArray(snapshot.favoriteRoutines) ? snapshot.favoriteRoutines : base.favoriteRoutines,
      goals: Array.isArray(snapshot.goals) ? snapshot.goals : base.goals,
      habits: Array.isArray(snapshot.habits) ? snapshot.habits : base.habits,
      progress: Array.isArray(snapshot.progress) ? snapshot.progress : base.progress,
      completedPrograms: Array.isArray(snapshot.completedPrograms) ? snapshot.completedPrograms : base.completedPrograms,
      abandonedPrograms: Array.isArray(snapshot.abandonedPrograms) ? snapshot.abandonedPrograms : base.abandonedPrograms,
      shownPhrases: Array.isArray(snapshot.shownPhrases) ? snapshot.shownPhrases : base.shownPhrases,
      adviceGiven: Array.isArray(snapshot.adviceGiven) ? snapshot.adviceGiven : base.adviceGiven,
      lastConversation: Array.isArray(snapshot.lastConversation) ? snapshot.lastConversation : base.lastConversation,
      observations: Array.isArray(snapshot.observations) ? snapshot.observations : base.observations,
      patterns: Array.isArray(snapshot.patterns) ? snapshot.patterns : base.patterns,
      recommendations: Array.isArray(snapshot.recommendations) ? snapshot.recommendations : base.recommendations,
      suspiciousAttempts: Array.isArray(snapshot.suspiciousAttempts) ? snapshot.suspiciousAttempts : base.suspiciousAttempts,
      usageHours: snapshot.usageHours && typeof snapshot.usageHours === "object" ? snapshot.usageHours : base.usageHours,
      preferences: snapshot.preferences && typeof snapshot.preferences === "object" ? snapshot.preferences : base.preferences,
      schemaVersion: 1,
      updatedAt: snapshot.updatedAt || nowIso()
    };
  }
}

export function createMemoryService(provider?: ZeninStorageProvider): MemoryService {
  return new MemoryService(provider || createLocalStorageProvider());
}
