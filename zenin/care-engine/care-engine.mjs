/**
 * Motor de cuidado no clinico.
 */
export class ZeninCareEngine {
  evaluate({ context = {}, observations = {}, relationship = {} } = {}) {
    const signals = [];
    const stress = Number(context.recentState?.latestStressLevel || 0);

    if (Number(observations.lowSleepDays || 0) >= 3) {
      signals.push({
        id: "sleep-low-three-days",
        severity: 72,
        reason: "Tres dias con descanso bajo.",
        suggestedAction: "review-rest"
      });
    }

    if (Number(observations.abandonedTools || 0) >= 5) {
      signals.push({
        id: "tools-abandoned",
        severity: 58,
        reason: "Varias herramientas fueron iniciadas sin completarse.",
        suggestedAction: "suggest-one-small-tool"
      });
    }

    if (stress >= 8) {
      signals.push({
        id: "stress-high",
        severity: 78,
        reason: "El estres reciente es alto.",
        suggestedAction: "suggest-breathing"
      });
    }

    const topSignal = signals.sort((a, b) => b.severity - a.severity)[0] || null;
    return {
      needsCare: Boolean(topSignal),
      topSignal,
      signals,
      relationshipDepth: relationship.daysKnown >= 30 ? "established" : "early",
      evaluatedAt: new Date().toISOString()
    };
  }
}
