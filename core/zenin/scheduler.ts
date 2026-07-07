import {
  ZeninContextSnapshot,
  ZeninInsight,
  ZeninPriority,
  ZeninRecommendation,
  ZeninScheduledIntervention,
  createId,
  nowIso
} from "./state";

const priorityRank: Record<ZeninPriority, number> = {
  Critical: 5,
  High: 4,
  Medium: 3,
  Low: 2,
  Silent: 1
};

export class ZeninScheduler {
  private queue: ZeninScheduledIntervention[] = [];
  private lastDeliveredAt: string | null = null;
  private cooldownMs = 180000;

  enqueueInsight(insight: ZeninInsight): ZeninScheduledIntervention {
    const intervention = this.createIntervention("insight", insight.priority, insight, `Insight: ${insight.key}`);
    this.queue.push(intervention);
    return intervention;
  }

  enqueueRecommendation(recommendation: ZeninRecommendation): ZeninScheduledIntervention {
    const intervention = this.createIntervention("recommendation", recommendation.priority, recommendation, `Recomendacion: ${recommendation.toolKey}`);
    this.queue.push(intervention);
    return intervention;
  }

  enqueuePhrase(payload: unknown, priority: ZeninPriority = "Low"): ZeninScheduledIntervention {
    const intervention = this.createIntervention("phrase", priority, payload, "Mensaje contextual");
    this.queue.push(intervention);
    return intervention;
  }

  selectNext(context: ZeninContextSnapshot): ZeninScheduledIntervention | null {
    this.refreshReadyItems();
    if (!this.canSpeak(context)) return null;
    const next = this.queue
      .filter((item) => item.status === "ready" && item.priority !== "Silent")
      .sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority] || a.createdAt.localeCompare(b.createdAt))[0];
    return next || null;
  }

  markDelivered(id: string): void {
    this.lastDeliveredAt = nowIso();
    this.queue = this.queue.map((item) => (item.id === id ? { ...item, status: "delivered" } : item));
  }

  mute(id: string): void {
    this.queue = this.queue.map((item) => (item.id === id ? { ...item, status: "muted" } : item));
  }

  snapshot(): unknown {
    return {
      pending: this.queue.filter((item) => item.status === "pending").length,
      ready: this.queue.filter((item) => item.status === "ready").length,
      delivered: this.queue.filter((item) => item.status === "delivered").length,
      lastDeliveredAt: this.lastDeliveredAt,
      queue: this.queue.slice(-20)
    };
  }

  private createIntervention(
    kind: ZeninScheduledIntervention["kind"],
    priority: ZeninPriority,
    payload: unknown,
    reason: string
  ): ZeninScheduledIntervention {
    return {
      id: createId("intervention"),
      kind,
      priority,
      payload,
      createdAt: nowIso(),
      earliestAt: nowIso(),
      status: priority === "Silent" ? "muted" : "pending",
      reason
    };
  }

  private refreshReadyItems(): void {
    const now = Date.now();
    this.queue = this.queue.map((item) => {
      if (item.status !== "pending") return item;
      return new Date(item.earliestAt).getTime() <= now ? { ...item, status: "ready" } : item;
    });
  }

  private canSpeak(context: ZeninContextSnapshot): boolean {
    if (context.isWriting || context.isReading || context.isCompletingTask) return false;
    if (context.activeTool || context.activeProgram) return false;
    if (this.lastDeliveredAt && Date.now() - new Date(this.lastDeliveredAt).getTime() < this.cooldownMs) return false;
    if (context.area === "AUTH") return false;
    return context.justFinished || context.area === "HOME" || context.area === "ZENIN_CHAT" || context.longSession || context.isInactive;
  }
}

export function createZeninScheduler(): ZeninScheduler {
  return new ZeninScheduler();
}
