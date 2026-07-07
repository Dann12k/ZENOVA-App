/**
 * Modela notificaciones suaves sin renderizar UI.
 */
export class ZeninNotificationEngine {
  constructor({ autoCloseMs = 7000 } = {}) {
    this.autoCloseMs = autoCloseMs;
    this.ignored = new Map();
  }

  createCard({ id, message, tone = "calm", priority = 0, animation = null } = {}) {
    return {
      id: id || `notification-${Date.now()}`,
      type: "zenin-card",
      style: {
        surface: "glass-blur",
        entrance: "slide-bottom-right",
        exit: "fade-slide",
        themeAware: true
      },
      message,
      tone,
      priority,
      animation,
      autoCloseMs: this.autoCloseMs,
      createdAt: new Date().toISOString()
    };
  }

  markIgnored(cardId) {
    this.ignored.set(cardId, {
      cardId,
      ignoredAt: new Date().toISOString()
    });
  }

  wasIgnored(cardId) {
    return this.ignored.has(cardId);
  }
}
