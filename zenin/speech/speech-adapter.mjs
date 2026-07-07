/**
 * Contrato para voz futura.
 *
 * No solicita permisos ni accede a microfono. Define la forma que debera tener
 * un adaptador real cuando la actividad lo requiera.
 */
export class ZeninSpeechAdapter {
  status() {
    return {
      enabled: false,
      reason: "Speech is reserved for a future ZENIN phase."
    };
  }

  async startListening() {
    throw new Error("Speech input is not enabled for this ZENIN phase.");
  }

  async speak() {
    throw new Error("Speech output is not enabled for this ZENIN phase.");
  }
}
