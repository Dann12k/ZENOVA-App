import { ZeninContextBuilder, ZeninContextTracker } from "./context";
import { EventBus, ZeninEventMeta, createEventBus, createEventFromZenovaContext } from "./events";
import { HistoryService, createHistoryService } from "./history";
import { InsightEngine } from "./insights";
import { MemoryService, createMemoryService } from "./memory";
import { MoodEngine, createMoodEngine } from "./mood";
import { PhraseService } from "./notifications";
import { PersonalityEngine, createPersonalityEngine } from "./personality";
import { RecommendationEngine } from "./recommendations";
import { ZeninScheduler, createZeninScheduler } from "./scheduler";
import {
  ZeninBrainSnapshot,
  ZeninEvent,
  ZeninEventType,
  ZeninScheduledIntervention,
  createAsyncQueue
} from "./state";

export interface ZeninBrainOptions {
  eventBus?: EventBus;
  memory?: MemoryService;
  history?: HistoryService;
  context?: ZeninContextTracker;
  insights?: InsightEngine;
  recommendations?: RecommendationEngine;
  scheduler?: ZeninScheduler;
  personality?: PersonalityEngine;
  mood?: MoodEngine;
  phraseService?: PhraseService;
  observationIntervalMs?: number;
}

export class ZeninBrain {
  readonly events: EventBus;
  readonly memory: MemoryService;
  readonly history: HistoryService;
  readonly context: ZeninContextTracker;
  readonly insights: InsightEngine;
  readonly recommendations: RecommendationEngine;
  readonly scheduler: ZeninScheduler;
  readonly personality: PersonalityEngine;
  readonly mood: MoodEngine;
  readonly phrases: PhraseService;

  private readonly queue = createAsyncQueue();
  private readonly observationIntervalMs: number;
  private observationTimer: ReturnType<typeof setInterval> | null = null;
  private unsubscribeEvents: (() => void) | null = null;
  private started = false;

  constructor(options: ZeninBrainOptions = {}) {
    this.events = options.eventBus || createEventBus();
    this.memory = options.memory || createMemoryService();
    this.history = options.history || createHistoryService();
    this.context = options.context || new ZeninContextTracker();
    this.insights = options.insights || new InsightEngine();
    this.recommendations = options.recommendations || new RecommendationEngine();
    this.scheduler = options.scheduler || createZeninScheduler();
    this.personality = options.personality || createPersonalityEngine();
    this.mood = options.mood || createMoodEngine();
    this.phrases = options.phraseService || new PhraseService(this.memory);
    this.observationIntervalMs = options.observationIntervalMs || 90000;
  }

  start(): void {
    if (this.started) return;
    this.started = true;
    this.unsubscribeEvents = this.events.subscribe("*", (event) => {
      this.queue.add(() => this.handleEvent(event));
    });
    this.observationTimer = setInterval(() => {
      this.queue.add(() => this.observeNow("interval"));
    }, this.observationIntervalMs);
    this.queue.add(() => this.observeNow("startup"));
  }

  stop(): void {
    this.started = false;
    this.unsubscribeEvents?.();
    this.unsubscribeEvents = null;
    if (this.observationTimer) clearInterval(this.observationTimer);
    this.observationTimer = null;
    this.queue.clear();
  }

  emit<TPayload = unknown>(type: ZeninEventType, payload: TPayload, meta?: ZeninEventMeta): ZeninEvent<TPayload> {
    return this.events.emit(type, payload, meta);
  }

  captureZenovaContext(kind: string, payload: unknown): ZeninEvent {
    const event = createEventFromZenovaContext(kind, payload);
    return this.events.emit(event.type, event.payload, event.meta);
  }

  async observeNow(reason = "manual"): Promise<void> {
    const memory = await this.memory.load();
    const history = await this.history.recent(240);
    const analysis = this.insights.analyze(memory, history);
    if (analysis.patterns.length) await this.memory.storePatterns(analysis.patterns);
    if (analysis.insights.length) await this.memory.storeInsights(analysis.insights);
    const updatedMemory = await this.memory.load();
    const scoredRecommendations = this.recommendations.score(updatedMemory, this.context.snapshot(), analysis.insights);
    await this.memory.storeRecommendations(scoredRecommendations);
    this.mood.reflectInsights(analysis.insights);
    analysis.insights.forEach((insight) => this.scheduler.enqueueInsight(insight));
    scoredRecommendations.slice(0, 3).forEach((recommendation) => this.scheduler.enqueueRecommendation(recommendation));
    await this.history.append({
      type: "observation",
      source: `zenin-brain:${reason}`,
      payload: {
        reason,
        patterns: analysis.patterns,
        insights: analysis.insights,
        recommendations: scoredRecommendations
      }
    });
  }

  tick(): ZeninScheduledIntervention | null {
    return this.scheduler.selectNext(this.context.snapshot());
  }

  async markDelivered(intervention: ZeninScheduledIntervention): Promise<void> {
    this.scheduler.markDelivered(intervention.id);
    await this.history.append({
      type: "system",
      source: "zenin-scheduler",
      payload: { delivered: intervention }
    });
  }

  async buildOpenAIContext(externalContext: Record<string, unknown> = {}): Promise<ZeninBrainSnapshot> {
    const memory = await this.memory.load();
    const history = await this.history.recent(300);
    return ZeninContextBuilder.build({
      profile: externalContext.profile,
      memory,
      history,
      mood: this.mood.snapshot(),
      personality: this.personality.snapshot(),
      recommendations: memory.recommendations,
      currentContext: this.context.snapshot(),
      recentEvents: this.events.recent(60),
      externalContext: {
        ...externalContext,
        scheduler: this.scheduler.snapshot()
      }
    });
  }

  private async handleEvent(event: ZeninEvent): Promise<void> {
    await this.history.appendEvent(event);
    await this.memory.registerActiveNow(new Date(event.createdAt));
    await this.memory.updateCollectionsFromEvent(event.type, event.payload);
    this.context.handleEvent(event);
    this.personality.adaptFromEvent(event);
    this.mood.reflectEvent(event);

    if (event.type === "USER_LOGIN" || event.type === "TOOL_FINISHED" || event.type === "CHECKIN_COMPLETED" || event.type === "HABIT_COMPLETED") {
      await this.observeNow(`event:${event.type}`);
    }
  }
}

export function createZeninBrain(options?: ZeninBrainOptions): ZeninBrain {
  return new ZeninBrain(options);
}
