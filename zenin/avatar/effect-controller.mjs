/**
 * EffectController
 *
 * Prepara aura, particulas, brillos, ondas y confeti como efectos visuales
 * discretos. No renderiza ni toma decisiones de comportamiento.
 */
export class ZeninEffectController {
  effectsFor(stateName = "idle") {
    const base = {
      aura: true,
      glow: "soft",
      particles: "ambient",
      wave: false,
      hologram: false,
      confetti: false
    };

    if (stateName === "thinking" || stateName === "analyzing") return { ...base, hologram: true, particles: "data" };
    if (stateName === "celebrating" || stateName === "proud") return { ...base, glow: "strong", particles: "spark", confetti: true };
    if (stateName === "concerned" || stateName === "empathetic") return { ...base, glow: "low", particles: "slow" };
    if (stateName === "surprised") return { ...base, wave: true, particles: "pop" };
    return base;
  }
}
