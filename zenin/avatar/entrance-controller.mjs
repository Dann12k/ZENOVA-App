/**
 * EntranceController
 *
 * Selecciona entradas y salidas cinematograficas. ZENIN nunca aparece ni
 * desaparece de golpe.
 */
export class ZeninEntranceController {
  constructor({ random = Math.random } = {}) {
    this.random = random;
    this.entrances = ["from-bottom", "from-right", "particle-cloud", "small-jump", "light-portal", "flash"];
    this.exits = ["step-back", "wave-fade", "fly-away", "particle-dissolve", "soft-bow"];
    this.durations = [500, 800, 1200];
  }

  nextEntrance() {
    return {
      key: this.pick(this.entrances),
      durationMs: this.pick(this.durations)
    };
  }

  nextExit() {
    return {
      key: this.pick(this.exits),
      durationMs: this.pick(this.durations)
    };
  }

  pick(values) {
    return values[Math.floor(this.random() * values.length)];
  }
}
