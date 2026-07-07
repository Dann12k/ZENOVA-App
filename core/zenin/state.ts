export type ZeninPriority = "Critical" | "High" | "Medium" | "Low" | "Silent";

export type ZeninMoodState =
  | "Neutral"
  | "Curious"
  | "Happy"
  | "Thoughtful"
  | "Proud"
  | "Concerned"
  | "Motivated"
  | "Celebrating"
  | "Calm";

export type ZeninArea =
  | "HOME"
  | "TOOLS"
  | "PROFILE"
  | "HABITS"
  | "CHECKIN"
  | "LIBRARY"
  | "PREMIUM"
  | "ZENIN_CHAT"
  | "AUTH"
  | "UNKNOWN";

export type ZeninEventType =
  | "USER_LOGIN"
  | "USER_LOGOUT"
  | "TOOL_STARTED"
  | "TOOL_FINISHED"
  | "MOOD_REGISTERED"
  | "HABIT_COMPLETED"
  | "OBJECTIVE_CREATED"
  | "OBJECTIVE_FINISHED"
  | "PROFILE_UPDATED"
  | "AI_OPENED"
  | "AI_CLOSED"
  | "PAGE_CHANGED"
  | "SESSION_TIMEOUT"
  | "CHECKIN_COMPLETED"
  | "RESOURCE_OPENED"
  | "PROGRAM_FINISHED"
  | "PROGRAM_ABANDONED"
  | "JOURNAL_CREATED"
  | "AGENDA_SAVED"
  | "GOAL_PROGRESS"
  | "USER_INACTIVE"
  | "OBSERVATION_TICK";

export interface ZeninEvent<TPayload = unknown> {
  id: string;
  type: ZeninEventType;
  createdAt: string;
  date: string;
  time: string;
  durationMs: number | null;
  source: string;
  result: string;
  payload: TPayload;
}

export interface ZeninPattern {
  id: string;
  key: string;
  label: string;
  evidence: string[];
  confidence: number;
  priority: ZeninPriority;
  detectedAt: string;
  lastUpdatedAt: string;
}

export interface ZeninInsight {
  id: string;
  key: string;
  text: string;
  priority: ZeninPriority;
  evidence: string[];
  confidence: number;
  createdAt: string;
  visible: false;
}

export interface ZeninRecommendation {
  id: string;
  toolKey: string;
  title: string;
  score: number;
  reasons: string[];
  priority: ZeninPriority;
  createdAt: string;
  status: "pending" | "queued" | "shown" | "dismissed" | "completed";
}

export interface ZeninScheduledIntervention {
  id: string;
  kind: "insight" | "recommendation" | "phrase" | "curiosity";
  priority: ZeninPriority;
  payload: unknown;
  createdAt: string;
  earliestAt: string;
  status: "pending" | "ready" | "delivered" | "muted";
  reason: string;
}

export interface ZeninPersonalityState {
  empathy: number;
  energy: number;
  humor: number;
  curiosity: number;
  formality: number;
  closeness: number;
  updatedAt: string;
}

export interface ZeninMoodVisualState {
  mood: ZeninMoodState;
  expression: string;
  halo: string;
  colors: string[];
  animation: string;
  speed: number;
  blinkRate: number;
  messageTone: string;
  updatedAt: string;
}

export interface ZeninContextSnapshot {
  area: ZeninArea;
  isWriting: boolean;
  isReading: boolean;
  isCompletingTask: boolean;
  isInactive: boolean;
  justFinished: boolean;
  longSession: boolean;
  activeTool: string | null;
  activeProgram: string | null;
  sessionStartedAt: string | null;
  lastInteractionAt: string | null;
  updatedAt: string;
}

export interface ZeninMemorySnapshot {
  schemaVersion: 1;
  updatedAt: string;
  emotionalHistory: unknown[];
  toolsUsed: unknown[];
  usageHours: Record<string, number>;
  activeDays: string[];
  absentDays: string[];
  favoriteRoutines: string[];
  goals: unknown[];
  habits: unknown[];
  progress: unknown[];
  completedPrograms: unknown[];
  abandonedPrograms: unknown[];
  shownPhrases: string[];
  adviceGiven: string[];
  lastConversation: unknown[];
  preferences: Record<string, unknown>;
  observations: ZeninInsight[];
  patterns: ZeninPattern[];
  recommendations: ZeninRecommendation[];
  suspiciousAttempts: unknown[];
}

export interface ZeninHistoryRecord {
  id: string;
  createdAt: string;
  type: "event" | "observation" | "pattern" | "insight" | "recommendation" | "system";
  source: string;
  payload: unknown;
}

export interface ZeninBrainSnapshot {
  generatedAt: string;
  profile: unknown;
  memory: ZeninMemorySnapshot;
  observations: ZeninInsight[];
  habits: unknown[];
  insights: ZeninInsight[];
  history: ZeninHistoryRecord[];
  mood: ZeninMoodVisualState;
  personality: ZeninPersonalityState;
  recommendations: ZeninRecommendation[];
  currentContext: ZeninContextSnapshot;
  unfinishedTasks: unknown[];
  emotionalTrend: unknown;
  favoriteTools: unknown[];
  recentEvents: ZeninEvent[];
  scheduler: unknown;
}

export interface ZeninStorageProvider {
  getItem(key: string): Promise<string | null> | string | null;
  setItem(key: string, value: string): Promise<void> | void;
  removeItem?(key: string): Promise<void> | void;
}

export interface ZeninAsyncQueue {
  add(task: () => Promise<void> | void): void;
  clear(): void;
  readonly size: number;
}

export const ZENIN_PRIORITIES: ZeninPriority[] = ["Critical", "High", "Medium", "Low", "Silent"];

export const ZENIN_AREAS: ZeninArea[] = [
  "HOME",
  "TOOLS",
  "PROFILE",
  "HABITS",
  "CHECKIN",
  "LIBRARY",
  "PREMIUM",
  "ZENIN_CHAT",
  "AUTH",
  "UNKNOWN"
];

export const ZENIN_EVENT_TYPES: ZeninEventType[] = [
  "USER_LOGIN",
  "USER_LOGOUT",
  "TOOL_STARTED",
  "TOOL_FINISHED",
  "MOOD_REGISTERED",
  "HABIT_COMPLETED",
  "OBJECTIVE_CREATED",
  "OBJECTIVE_FINISHED",
  "PROFILE_UPDATED",
  "AI_OPENED",
  "AI_CLOSED",
  "PAGE_CHANGED",
  "SESSION_TIMEOUT",
  "CHECKIN_COMPLETED",
  "RESOURCE_OPENED",
  "PROGRAM_FINISHED",
  "PROGRAM_ABANDONED",
  "JOURNAL_CREATED",
  "AGENDA_SAVED",
  "GOAL_PROGRESS",
  "USER_INACTIVE",
  "OBSERVATION_TICK"
];

export const ZENIN_MOODS: ZeninMoodState[] = [
  "Neutral",
  "Curious",
  "Happy",
  "Thoughtful",
  "Proud",
  "Concerned",
  "Motivated",
  "Celebrating",
  "Calm"
];

export function nowIso(): string {
  return new Date().toISOString();
}

export function createId(prefix = "zenin"): string {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi && "randomUUID" in cryptoApi) {
    return `${prefix}-${cryptoApi.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    return fallback;
  }
}

export function clamp(value: number, min = 0, max = 1): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function uniqueBy<T>(items: T[], keyFor: (item: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = keyFor(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function daysBetween(fromIso: string | null | undefined, toDate = new Date()): number {
  if (!fromIso) return Number.POSITIVE_INFINITY;
  const from = new Date(fromIso);
  if (Number.isNaN(from.getTime())) return Number.POSITIVE_INFINITY;
  const ms = toDate.getTime() - from.getTime();
  return Math.floor(ms / 86400000);
}

export function dayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function hourKey(date = new Date()): string {
  return `${dayKey(date)}T${String(date.getHours()).padStart(2, "0")}`;
}

export function createInitialMemory(): ZeninMemorySnapshot {
  return {
    schemaVersion: 1,
    updatedAt: nowIso(),
    emotionalHistory: [],
    toolsUsed: [],
    usageHours: {},
    activeDays: [],
    absentDays: [],
    favoriteRoutines: [],
    goals: [],
    habits: [],
    progress: [],
    completedPrograms: [],
    abandonedPrograms: [],
    shownPhrases: [],
    adviceGiven: [],
    lastConversation: [],
    preferences: {},
    observations: [],
    patterns: [],
    recommendations: [],
    suspiciousAttempts: []
  };
}

export function createInitialContext(): ZeninContextSnapshot {
  return {
    area: "UNKNOWN",
    isWriting: false,
    isReading: false,
    isCompletingTask: false,
    isInactive: false,
    justFinished: false,
    longSession: false,
    activeTool: null,
    activeProgram: null,
    sessionStartedAt: null,
    lastInteractionAt: null,
    updatedAt: nowIso()
  };
}

export function createInitialPersonality(): ZeninPersonalityState {
  return {
    empathy: 0.82,
    energy: 0.58,
    humor: 0.32,
    curiosity: 0.68,
    formality: 0.42,
    closeness: 0.54,
    updatedAt: nowIso()
  };
}

export function createInitialMood(): ZeninMoodVisualState {
  return {
    mood: "Neutral",
    expression: "soft-smile",
    halo: "violet-gold",
    colors: ["#783FC6", "#F5C542", "#E9D5FF"],
    animation: "idle-breathing",
    speed: 1,
    blinkRate: 0.55,
    messageTone: "warm",
    updatedAt: nowIso()
  };
}

export function debounce<TArgs extends unknown[]>(fn: (...args: TArgs) => void, waitMs: number): (...args: TArgs) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: TArgs) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}

export function throttle<TArgs extends unknown[]>(fn: (...args: TArgs) => void, waitMs: number): (...args: TArgs) => void {
  let lastRun = 0;
  let trailing: ReturnType<typeof setTimeout> | null = null;
  return (...args: TArgs) => {
    const now = Date.now();
    const remaining = waitMs - (now - lastRun);
    if (remaining <= 0) {
      lastRun = now;
      fn(...args);
      return;
    }
    if (!trailing) {
      trailing = setTimeout(() => {
        trailing = null;
        lastRun = Date.now();
        fn(...args);
      }, remaining);
    }
  };
}

export function createAsyncQueue(): ZeninAsyncQueue {
  const tasks: Array<() => Promise<void> | void> = [];
  let running = false;

  async function drain(): Promise<void> {
    if (running) return;
    running = true;
    while (tasks.length) {
      const task = tasks.shift();
      if (!task) continue;
      await Promise.resolve(task());
    }
    running = false;
  }

  return {
    add(task) {
      tasks.push(task);
      setTimeout(drain, 0);
    },
    clear() {
      tasks.splice(0, tasks.length);
    },
    get size() {
      return tasks.length;
    }
  };
}
