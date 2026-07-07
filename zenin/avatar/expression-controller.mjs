/**
 * ExpressionController
 *
 * Traduce emociones internas en rostro, ojos, boca y postura visual. No decide
 * cuando ZENIN aparece.
 */
export class ZeninExpressionController {
  expressionFor(emotion = "calm") {
    const map = {
      calm: { eyes: "soft", mouth: "small-smile", headTilt: 0, glow: 0.38 },
      happy: { eyes: "bright", mouth: "smile", headTilt: -2, glow: 0.64 },
      proud: { eyes: "bright", mouth: "smile", headTilt: 1, glow: 0.72 },
      celebrating: { eyes: "arc", mouth: "big-smile", headTilt: -3, glow: 0.88 },
      curious: { eyes: "wide", mouth: "soft-dot", headTilt: -8, glow: 0.48 },
      concerned: { eyes: "soft-low", mouth: "tiny-line", headTilt: 5, glow: 0.28 },
      empathetic: { eyes: "soft", mouth: "small-smile", headTilt: 3, glow: 0.44 },
      analyzing: { eyes: "focus", mouth: "line", headTilt: 0, glow: 0.52 },
      sleeping: { eyes: "closed", mouth: "rest", headTilt: 8, glow: 0.12 },
      surprised: { eyes: "wide", mouth: "o", headTilt: -4, glow: 0.62 }
    };
    return map[emotion] || map.calm;
  }
}
