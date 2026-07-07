import {
  ZeninArea,
  ZeninBrainSnapshot,
  ZeninContextSnapshot,
  ZeninEvent,
  ZeninMemorySnapshot,
  ZeninMoodVisualState,
  ZeninPersonalityState,
  ZeninRecommendation,
  createInitialContext,
  nowIso
} from "./state";

export class ZeninContextTracker {
  private context: ZeninContextSnapshot = createInitialContext();
  private readonly inactivityMs: number;
  private readonly longSessionMs: number;

  constructor(options: { inactivityMs?: number; longSessionMs?: number } = {}) {
    this.inactivityMs = options.inactivityMs ?? 180000;
    this.longSessionMs = options.longSessionMs ?? 1800000;
  }

  snapshot(): ZeninContextSnapshot {
    this.evaluateTimeState();
    return { ...this.context };
  }

  setArea(area: ZeninArea): ZeninContextSnapshot {
    this.context = {
      ...this.context,
      area,
      updatedAt: nowIso()
    };
    this.markInteraction();
    return this.snapshot();
  }

  markWriting(isWriting: boolean): void {
    this.context = { ...this.context, isWriting, updatedAt: nowIso() };
    if (isWriting) this.markInteraction();
  }

  markReading(isReading: boolean): void {
    this.context = { ...this.context, isReading, updatedAt: nowIso() };
    if (isReading) this.markInteraction();
  }

  startTask(toolKey?: string): void {
    this.context = {
      ...this.context,
      isCompletingTask: true,
      justFinished: false,
      activeTool: toolKey || this.context.activeTool,
      updatedAt: nowIso()
    };
    this.markInteraction();
  }

  finishTask(): void {
    this.context = {
      ...this.context,
      isCompletingTask: false,
      justFinished: true,
      activeTool: null,
      updatedAt: nowIso()
    };
    this.markInteraction();
  }

  startSession(): void {
    this.context = {
      ...this.context,
      area: "HOME",
      sessionStartedAt: nowIso(),
      lastInteractionAt: nowIso(),
      isInactive: false,
      updatedAt: nowIso()
    };
  }

  endSession(): void {
    this.context = {
      ...createInitialContext(),
      area: "AUTH",
      updatedAt: nowIso()
    };
  }

  markInteraction(): void {
    this.context = {
      ...this.context,
      isInactive: false,
      lastInteractionAt: nowIso(),
      updatedAt: nowIso()
    };
  }

  handleEvent(event: ZeninEvent): void {
    if (event.type === "USER_LOGIN") this.startSession();
    if (event.type === "USER_LOGOUT" || event.type === "SESSION_TIMEOUT") this.endSession();
    if (event.type === "TOOL_STARTED") {
      this.setArea("TOOLS");
      this.startTask(readPayloadKey(event.payload));
    }
    if (event.type === "TOOL_FINISHED") {
      this.finishTask();
      this.setArea("TOOLS");
    }
    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") this.setArea("CHECKIN");
    if (event.type === "HABIT_COMPLETED") this.setArea("HABITS");
    if (event.type === "AI_OPENED") this.setArea("ZENIN_CHAT");
    if (event.type === "AI_CLOSED") this.setArea("HOME");
    if (event.type === "RESOURCE_OPENED") this.setArea("LIBRARY");
    if (event.type === "PROFILE_UPDATED") this.setArea("PROFILE");
    if (event.type === "PAGE_CHANGED") this.setArea(inferAreaFromPayload(event.payload));
  }

  private evaluateTimeState(): void {
    const now = Date.now();
    const lastInteractionAt = this.context.lastInteractionAt ? new Date(this.context.lastInteractionAt).getTime() : now;
    const sessionStartedAt = this.context.sessionStartedAt ? new Date(this.context.sessionStartedAt).getTime() : now;
    this.context = {
      ...this.context,
      isInactive: now - lastInteractionAt > this.inactivityMs,
      longSession: Boolean(this.context.sessionStartedAt && now - sessionStartedAt > this.longSessionMs),
      justFinished: this.context.justFinished && now - new Date(this.context.updatedAt).getTime() < 90000
    };
  }
}

export class ZeninContextBuilder {
  static build(input: {
    profile?: unknown;
    memory: ZeninMemorySnapshot;
    history: unknown[];
    mood: ZeninMoodVisualState;
    personality: ZeninPersonalityState;
    recommendations: ZeninRecommendation[];
    currentContext: ZeninContextSnapshot;
    recentEvents: ZeninEvent[];
    externalContext?: Record<string, unknown>;
  }): ZeninBrainSnapshot {
    const emotionalEntries = input.memory.emotionalHistory;
    const favoriteTools = findFavoriteTools(input.memory.toolsUsed);
    return {
      generatedAt: nowIso(),
      profile: input.profile || input.externalContext?.profile || {},
      memory: input.memory,
      observations: input.memory.observations,
      habits: input.memory.habits,
      insights: input.memory.observations,
      history: input.history as ZeninBrainSnapshot["history"],
      mood: input.mood,
      personality: input.personality,
      recommendations: input.recommendations,
      currentContext: input.currentContext,
      unfinishedTasks: findUnfinishedTasks(input.memory),
      emotionalTrend: buildEmotionalTrend(emotionalEntries),
      favoriteTools,
      recentEvents: input.recentEvents,
      scheduler: input.externalContext?.scheduler || {}
    };
  }
}

export function inferAreaFromHash(hash: string): ZeninArea {
  const value = hash.toLowerCase();
  if (value.includes("tool")) return "TOOLS";
  if (value.includes("profile")) return "PROFILE";
  if (value.includes("habit")) return "HABITS";
  if (value.includes("checkin") || value.includes("assessment")) return "CHECKIN";
  if (value.includes("library") || value.includes("resource")) return "LIBRARY";
  if (value.includes("premium") || value.includes("vip")) return "PREMIUM";
  if (value.includes("chat") || value.includes("zenin")) return "ZENIN_CHAT";
  if (value.includes("auth") || value.includes("login")) return "AUTH";
  if (value.includes("home") || value === "" || value === "#") return "HOME";
  return "UNKNOWN";
}

function inferAreaFromPayload(payload: unknown): ZeninArea {
  if (typeof payload === "string") return inferAreaFromHash(payload);
  if (payload && typeof payload === "object" && "area" in payload) {
    const area = String((payload as { area: unknown }).area).toUpperCase() as ZeninArea;
    return area;
  }
  return "UNKNOWN";
}

function readPayloadKey(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const record = payload as { key?: unknown; toolKey?: unknown; title?: unknown };
  return String(record.key || record.toolKey || record.title || "") || null;
}

function findFavoriteTools(toolsUsed: unknown[]): unknown[] {
  const counts = new Map<string, number>();
  toolsUsed.forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    const key = String((entry as { key?: unknown; toolKey?: unknown; title?: unknown }).key || (entry as { toolKey?: unknown }).toolKey || (entry as { title?: unknown }).title || "tool");
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([key, count]) => ({ key, count }));
}

function findUnfinishedTasks(memory: ZeninMemorySnapshot): unknown[] {
  const finishedGoalIds = new Set(
    memory.progress
      .filter((item) => item && typeof item === "object" && "finished" in item)
      .map((item) => String((item as { id?: unknown }).id || ""))
  );
  return memory.goals.filter((goal) => {
    if (!goal || typeof goal !== "object") return true;
    const id = String((goal as { id?: unknown }).id || "");
    return id ? !finishedGoalIds.has(id) : true;
  });
}

function buildEmotionalTrend(entries: unknown[]): unknown {
  const recent = entries.slice(-14);
  const scores = recent
    .map((entry) => {
      if (!entry || typeof entry !== "object") return null;
      const record = entry as { score?: unknown; stress?: unknown; moodScore?: unknown };
      const score = Number(record.score ?? record.moodScore ?? record.stress);
      return Number.isFinite(score) ? score : null;
    })
    .filter((value): value is number => value !== null);
  if (scores.length < 2) return { status: "insufficient-data", points: scores.length };
  const first = scores.slice(0, Math.ceil(scores.length / 2)).reduce((sum, item) => sum + item, 0) / Math.ceil(scores.length / 2);
  const second =
    scores.slice(Math.floor(scores.length / 2)).reduce((sum, item) => sum + item, 0) /
    (scores.length - Math.floor(scores.length / 2));
  return {
    status: second >= first ? "improving-or-stable" : "declining",
    firstAverage: Math.round(first),
    secondAverage: Math.round(second),
    points: scores.length
  };
}
