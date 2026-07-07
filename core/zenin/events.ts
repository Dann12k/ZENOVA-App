import { ZeninEvent, ZeninEventType, createId, nowIso } from "./state";

export type ZeninEventListener = (event: ZeninEvent) => Promise<void> | void;
export type ZeninEventUnsubscribe = () => void;

export interface ZeninEventMeta {
  durationMs?: number | null;
  source?: string;
  result?: string;
}

const zenovaKindMap: Record<string, ZeninEventType> = {
  "checkin.created": "CHECKIN_COMPLETED",
  "habit.completed": "HABIT_COMPLETED",
  "habit.saved": "HABIT_COMPLETED",
  "goal.saved": "OBJECTIVE_CREATED",
  "goal.progress": "GOAL_PROGRESS",
  "journal.created": "JOURNAL_CREATED",
  "agenda.saved": "AGENDA_SAVED",
  "evaluation.multifactor": "MOOD_REGISTERED",
  "tool.started": "TOOL_STARTED",
  "tool.completed": "TOOL_FINISHED",
  "resource.opened": "RESOURCE_OPENED",
  "program.finished": "PROGRAM_FINISHED",
  "program.abandoned": "PROGRAM_ABANDONED",
  "page.changed": "PAGE_CHANGED"
};

export class EventBus {
  private listeners = new Map<ZeninEventType | "*", Set<ZeninEventListener>>();
  private events: ZeninEvent[] = [];

  emit<TPayload = unknown>(type: ZeninEventType, payload: TPayload, meta: ZeninEventMeta = {}): ZeninEvent<TPayload> {
    const createdAt = nowIso();
    const event: ZeninEvent<TPayload> = {
      id: createId("event"),
      type,
      createdAt,
      date: createdAt.slice(0, 10),
      time: createdAt.slice(11, 19),
      durationMs: meta.durationMs ?? null,
      source: meta.source || "zenova",
      result: meta.result || "unknown",
      payload
    };
    this.events.unshift(event);
    this.events = this.events.slice(0, 300);
    this.notify(type, event);
    this.notify("*", event);
    return event;
  }

  subscribe(type: ZeninEventType | "*", listener: ZeninEventListener): ZeninEventUnsubscribe {
    const current = this.listeners.get(type) || new Set<ZeninEventListener>();
    current.add(listener);
    this.listeners.set(type, current);
    return () => current.delete(listener);
  }

  once(type: ZeninEventType, listener: ZeninEventListener): ZeninEventUnsubscribe {
    const unsubscribe = this.subscribe(type, async (event) => {
      unsubscribe();
      await listener(event);
    });
    return unsubscribe;
  }

  recent(limit = 40): ZeninEvent[] {
    return this.events.slice(0, limit);
  }

  clearRuntimeBuffer(): void {
    this.events = [];
  }

  private notify(type: ZeninEventType | "*", event: ZeninEvent): void {
    const listeners = this.listeners.get(type);
    if (!listeners) return;
    listeners.forEach((listener) => {
      Promise.resolve(listener(event)).catch((error) => {
        this.emit("OBSERVATION_TICK", { error: String(error) }, { source: "event-bus", result: "listener-error" });
      });
    });
  }
}

export function createEventBus(): EventBus {
  return new EventBus();
}

export function mapZenovaEventKind(kind: string): ZeninEventType {
  return zenovaKindMap[kind] || "OBSERVATION_TICK";
}

export function createEventFromZenovaContext(kind: string, payload: unknown): {
  type: ZeninEventType;
  payload: unknown;
  meta: ZeninEventMeta;
} {
  return {
    type: mapZenovaEventKind(kind),
    payload,
    meta: {
      source: `ZenovaContextStore:${kind}`,
      result: "captured"
    }
  };
}
