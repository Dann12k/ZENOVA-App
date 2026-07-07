export type ZeninEventType =
  | "auth.login"
  | "auth.logout"
  | "tool.started"
  | "tool.completed"
  | "goal.created"
  | "goal.progress"
  | "habit.created"
  | "habit.updated"
  | "habit.completed"
  | "emotion.logged"
  | "journal.created"
  | "settings.updated"
  | "achievement.unlocked"
  | "zenin.intervention.queued"
  | "zenin.intervention.dismissed";

export interface ZeninEvent<TPayload = Record<string, unknown>> {
  id: string;
  type: ZeninEventType | string;
  payload: TPayload;
  meta: Record<string, unknown>;
  createdAt: string;
}

export interface ZeninEmotionSnapshot {
  name: string;
  reason: string;
  confidence: number;
  visual: Record<string, unknown> | null;
  evaluatedAt: string;
}

export interface ZeninRelationshipSnapshot {
  trust: number;
  frequency: number;
  consistency: number;
  progress: number;
  interaction: number;
  affinity: number;
  daysKnown: number;
  firstSeenAt: string | null;
  lastSeenAt: string | null;
}

export interface ZeninDecision {
  id: string;
  ruleId: string;
  priority: number;
  interventionType: string;
  reason: string;
  cooldownMs: number;
  evidence: Record<string, unknown>;
  createdAt: string;
}

export interface ZeninNotificationCard {
  id: string;
  type: "zenin-card";
  style: {
    surface: "glass-blur";
    entrance: "slide-bottom-right";
    exit: "fade-slide";
    themeAware: boolean;
  };
  message: string;
  tone: string;
  priority: number;
  animation: string | null;
  autoCloseMs: number;
  createdAt: string;
}
