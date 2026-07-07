import { clamp } from "../utils/guards.mjs";

const DEFAULT_RELATIONSHIP = Object.freeze({
  trust: 8,
  frequency: 0,
  consistency: 0,
  progress: 0,
  interaction: 0,
  affinity: 0,
  daysKnown: 0,
  firstSeenAt: null,
  lastSeenAt: null
});

/**
 * Actualiza lentamente la relacion con el usuario.
 */
export class ZeninRelationshipEngine {
  constructor({ initialState = {} } = {}) {
    this.state = { ...DEFAULT_RELATIONSHIP, ...initialState };
  }

  ingestEvent(event) {
    const now = new Date(event.createdAt || Date.now());
    if (!this.state.firstSeenAt) this.state.firstSeenAt = now.toISOString();
    this.state.lastSeenAt = now.toISOString();
    this.state.daysKnown = Math.max(0, Math.floor((Date.now() - Date.parse(this.state.firstSeenAt)) / 86400000));

    if (event.type === "auth.login") this.nudge({ frequency: 1.2, trust: 0.4 });
    if (event.type === "tool.completed") this.nudge({ progress: 2, consistency: 1.1, trust: 0.8, affinity: 0.5 });
    if (event.type === "journal.created" || event.type === "emotion.logged") this.nudge({ interaction: 1.3, trust: 0.6 });
    if (event.type === "goal.progress") this.nudge({ progress: 1.5, trust: 0.7 });
    if (event.type === "zenin.intervention.dismissed") this.nudge({ affinity: -0.8, trust: -0.4 });

    return this.snapshot();
  }

  nudge(delta = {}) {
    Object.keys(DEFAULT_RELATIONSHIP).forEach((key) => {
      if (typeof this.state[key] === "number" && typeof delta[key] === "number") {
        this.state[key] = clamp(this.state[key] + delta[key], 0, 100);
      }
    });
  }

  snapshot() {
    return { ...this.state };
  }
}
