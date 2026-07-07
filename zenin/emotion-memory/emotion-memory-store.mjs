/**
 * Memoria emocional resumida.
 */
export class ZeninEmotionMemoryStore {
  constructor({ limit = 80 } = {}) {
    this.limit = limit;
    this.patterns = new Map();
  }

  rememberPattern(key, summary, evidence = {}) {
    const current = this.patterns.get(key) || { key, occurrences: 0, firstSeenAt: new Date().toISOString() };
    const next = {
      ...current,
      summary,
      evidence,
      occurrences: current.occurrences + 1,
      updatedAt: new Date().toISOString()
    };
    this.patterns.set(key, next);
    this.trim();
    return next;
  }

  ingestObservation(observation = {}) {
    if (observation.highestStressDay) {
      this.rememberPattern("stress.highest-day", `Dia con mas estres observado: ${observation.highestStressDay}.`, {
        day: observation.highestStressDay
      });
    }
    if (observation.favoriteTool) {
      this.rememberPattern("tool.favorite", `Herramienta usada con mas frecuencia: ${observation.favoriteTool}.`, {
        tool: observation.favoriteTool
      });
    }
    if (observation.averageSleepHours && observation.averageSleepHours < 6) {
      this.rememberPattern("sleep.low-average", "El promedio de sueno reciente esta por debajo de 6 horas.", {
        averageSleepHours: observation.averageSleepHours
      });
    }
    return this.summary();
  }

  summary() {
    return [...this.patterns.values()].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  }

  trim() {
    const entries = this.summary();
    if (entries.length <= this.limit) return;
    entries.slice(this.limit).forEach((entry) => this.patterns.delete(entry.key));
  }
}
