/**
 * AnimationController
 *
 * Selecciona animaciones por estado del avatar. No sabe nada de OpenAI,
 * decisiones de cuidado ni contenido conversacional.
 */
export class ZeninAnimationController {
  constructor({ catalog = [], random = Math.random } = {}) {
    this.catalog = catalog;
    this.random = random;
  }

  animationFor(stateName, options = {}) {
    const candidates = this.catalog.filter((item) => item.states?.includes(stateName) || item.key?.includes(stateName));
    const selected = candidates.length ? candidates[Math.floor(this.random() * candidates.length)] : null;
    const durationMs = options.durationMs || this.randomDuration();
    return {
      key: selected?.key || `avatar.${stateName || "idle"}`,
      renderer: selected?.renderer || "css-fallback",
      durationMs,
      loop: selected?.loop !== false,
      variation: this.randomVariation()
    };
  }

  randomDuration() {
    return Math.round(3000 + this.random() * 5000);
  }

  randomVariation() {
    return {
      delayMs: Math.round(this.random() * 420),
      intensity: Number((0.86 + this.random() * 0.28).toFixed(2)),
      direction: this.random() > 0.5 ? "left" : "right"
    };
  }
}
