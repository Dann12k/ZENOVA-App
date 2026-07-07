/**
 * Declaracion de capacidades de voz futura.
 */
export class ZeninVoiceReadyService {
  capabilities() {
    return {
      input: "planned",
      output: "planned",
      wakeWord: "not-planned",
      requiresPermissionBeforeUse: true,
      currentStatus: "disabled-by-design"
    };
  }
}
