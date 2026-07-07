/**
 * Humor ligero y ocasional.
 */
export class ZeninHumorEngine {
  constructor({ templates = [], modifiers = [], cooldownMs = 86400000, now = () => Date.now() } = {}) {
    this.templates = templates;
    this.modifiers = modifiers;
    this.cooldownMs = cooldownMs;
    this.now = now;
    this.used = new Set();
    this.lastUsedAt = 0;
  }

  canUse({ stressHigh = false, careActive = false, style = {} } = {}) {
    return Boolean(style.humorAllowed) && !stressHigh && !careActive && this.now() - this.lastUsedAt >= this.cooldownMs;
  }

  pick(context = {}) {
    if (!this.canUse(context)) return null;
    for (const template of this.templates) {
      for (const modifier of this.modifiers) {
        const phrase = `${template}${modifier}`;
        if (!this.used.has(phrase)) {
          this.used.add(phrase);
          this.lastUsedAt = this.now();
          return phrase;
        }
      }
    }
    this.used.clear();
    return this.pick(context);
  }

  availableCombinationCount() {
    return this.templates.length * this.modifiers.length;
  }
}
