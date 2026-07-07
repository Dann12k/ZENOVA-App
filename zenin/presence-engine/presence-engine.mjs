/**
 * Controla apariciones de ZENIN para evitar presencia invasiva.
 */
export class ZeninPresenceEngine {
  constructor({ cooldownMs = 10800000, now = () => Date.now() } = {}) {
    this.cooldownMs = cooldownMs;
    this.now = now;
    this.lastPresenceByReason = new Map();
  }

  evaluate({ reason, priority = 0, care = null, event = null } = {}) {
    const presenceReason = reason || care?.topSignal?.id || event?.type || "unspecified";
    const last = this.lastPresenceByReason.get(presenceReason) || 0;
    const coolingDown = this.now() - last < this.cooldownMs;
    const allowed = !coolingDown && (priority >= 50 || care?.needsCare || this.isNaturalMoment(event));

    return {
      allowed,
      reason: presenceReason,
      priority,
      coolingDown,
      nextAllowedAt: coolingDown ? new Date(last + this.cooldownMs).toISOString() : null
    };
  }

  markShown(reason) {
    this.lastPresenceByReason.set(reason, this.now());
  }

  isNaturalMoment(event) {
    return [
      "auth.login",
      "tool.completed",
      "journal.created",
      "goal.progress",
      "achievement.unlocked"
    ].includes(event?.type);
  }
}
