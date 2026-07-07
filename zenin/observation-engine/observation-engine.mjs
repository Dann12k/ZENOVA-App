import { average, hourFromIso, safeArray } from "../utils/guards.mjs";

/**
 * Analiza patrones de uso sin IA.
 */
export class ZeninObservationEngine {
  constructor() {
    this.events = [];
  }

  record(event) {
    this.events.unshift(event);
    this.events = this.events.slice(0, 500);
    return this.snapshot();
  }

  snapshot(rawSources = {}) {
    const toolEvents = this.events.filter((event) => event.type?.startsWith("tool."));
    const completedTools = toolEvents.filter((event) => event.type === "tool.completed");
    const startedTools = toolEvents.filter((event) => event.type === "tool.started");
    const checkins = safeArray(rawSources.checkins);
    const emotions = safeArray(rawSources.emotionalEntries);
    const sleepValues = checkins.map((item) => Number(item.sleepHours || item.sleep || 0)).filter(Boolean);
    const stressByDay = this.groupAverageByWeekday([...checkins, ...emotions], "stressLevel");
    const moodByDay = this.groupAverageByWeekday([...checkins, ...emotions], "moodScore");

    return {
      habitualHour: this.mostCommon(this.events.map((event) => hourFromIso(event.createdAt)).filter((value) => value !== null)),
      favoriteTool: this.mostCommon(completedTools.map((event) => event.payload?.key).filter(Boolean)),
      averageToolSeconds: average(completedTools.map((event) => Number(event.payload?.secondsUsed || 0)).filter(Boolean)),
      abandonedTools: Math.max(0, startedTools.length - completedTools.length),
      lowSleepDays: sleepValues.filter((hours) => hours < 6).length,
      averageSleepHours: average(sleepValues),
      highestStressDay: this.highestKey(stressByDay),
      bestMoodDay: this.highestKey(moodByDay),
      emotionalTrend: rawSources.emotionalTrend || "unknown",
      newPatternDetected: this.events.length > 0 && this.events.length % 12 === 0,
      generatedAt: new Date().toISOString()
    };
  }

  groupAverageByWeekday(items, field) {
    return items.reduce((acc, item) => {
      const date = item.createdAt || item.date;
      const value = Number(item[field] || 0);
      if (!date || !value) return acc;
      const day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });
      acc[day] = acc[day] || [];
      acc[day].push(value);
      return acc;
    }, {});
  }

  highestKey(grouped) {
    let winner = null;
    let winnerValue = -Infinity;
    Object.entries(grouped).forEach(([key, values]) => {
      const value = average(values);
      if (value > winnerValue) {
        winner = key;
        winnerValue = value;
      }
    });
    return winner;
  }

  mostCommon(values) {
    const counts = values.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  }
}
