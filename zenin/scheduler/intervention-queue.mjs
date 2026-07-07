/**
 * Cola de intervenciones.
 *
 * Evita que ZENIN sea invasivo. Solo una intervencion puede estar activa y cada
 * tipo puede respetar su periodo de enfriamiento.
 */
export class ZeninInterventionQueue {
  constructor({ now = () => Date.now() } = {}) {
    this.now = now;
    this.items = [];
    this.activeItem = null;
    this.cooldowns = new Map();
  }

  enqueue(item) {
    if (!item) return null;
    const queued = {
      ...item,
      status: "queued",
      queuedAt: new Date(this.now()).toISOString()
    };
    this.items.push(queued);
    this.items.sort((a, b) => b.priority - a.priority);
    return queued;
  }

  claimNext() {
    if (this.activeItem) return null;
    const index = this.items.findIndex((item) => !this.isCoolingDown(item));
    if (index < 0) return null;
    const [item] = this.items.splice(index, 1);
    this.activeItem = { ...item, status: "active", startedAt: new Date(this.now()).toISOString() };
    return this.activeItem;
  }

  completeActive() {
    if (!this.activeItem) return null;
    const completed = { ...this.activeItem, status: "completed", completedAt: new Date(this.now()).toISOString() };
    this.registerCooldown(completed);
    this.activeItem = null;
    return completed;
  }

  dismissActive(reason = "user-dismissed") {
    if (!this.activeItem) return null;
    const dismissed = { ...this.activeItem, status: "dismissed", reason, dismissedAt: new Date(this.now()).toISOString() };
    this.registerCooldown(dismissed);
    this.activeItem = null;
    return dismissed;
  }

  isCoolingDown(item) {
    const key = item.interventionType || item.ruleId;
    const until = this.cooldowns.get(key);
    return until ? until > this.now() : false;
  }

  registerCooldown(item) {
    const key = item.interventionType || item.ruleId;
    if (item.cooldownMs) this.cooldowns.set(key, this.now() + Number(item.cooldownMs));
  }
}
