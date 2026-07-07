/**
 * Motor de recomendaciones propio.
 *
 * No depende de IA. Devuelve candidatos con razon tecnica para que una fase
 * futura pueda explicarlos con ZENIN si corresponde.
 */
export class ZeninRecommendationEngine {
  constructor({ catalog = [] } = {}) {
    this.catalog = catalog;
  }

  suggest(context = {}) {
    const signals = this.extractSignals(context);
    return this.catalog
      .map((item) => {
        const matches = (item.match || []).filter((signal) => signals.includes(signal));
        return matches.length
          ? { id: item.id, kind: item.kind, priority: Number(item.priority || 0) + matches.length * 5, reasonSignals: matches }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.priority - a.priority);
  }

  extractSignals(context) {
    const signals = [];
    if (Number(context.recentState?.latestStressLevel || 0) >= 7) signals.push("stress-high");
    if (context.recentState?.emotionalTrend === "declining") signals.push("calm-needed");
    if ((context.profile?.mainContext || "").includes("academ")) signals.push("academic-stress");
    if ((context.preferences?.favoriteTools || []).includes("grounding")) signals.push("present-focus");
    return signals;
  }
}
