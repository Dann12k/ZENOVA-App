/**
 * Prepara celebraciones no invasivas.
 */
export class ZeninCelebrationEngine {
  constructor() {
    this.usedMessages = new Set();
  }

  createCelebration({ achievement = null, behavior = null, phrase = null } = {}) {
    const message = this.uniqueMessage(phrase || achievement?.message || "Buen avance. Esto tambien cuenta.");
    return {
      id: `celebration-${Date.now()}`,
      type: achievement ? "achievement" : "progress",
      animation: achievement?.animation || "celebration.soft-particles",
      expression: achievement?.expression || "proud",
      effects: {
        confetti: achievement?.level === "major",
        particles: true,
        glow: true,
        soundPrepared: true,
        medal: achievement?.medal || null
      },
      message,
      sourceBehavior: behavior?.behaviorId || null,
      createdAt: new Date().toISOString()
    };
  }

  uniqueMessage(message) {
    if (!this.usedMessages.has(message)) {
      this.usedMessages.add(message);
      return message;
    }
    const next = `${message} (${this.usedMessages.size + 1})`;
    this.usedMessages.add(next);
    return next;
  }
}
