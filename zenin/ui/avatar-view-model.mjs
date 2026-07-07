/**
 * Modelo de vista para el avatar.
 *
 * No crea DOM. Permite que una UI futura reciba una estructura estable.
 */
export function buildAvatarViewModel({ frame, activeIntervention = null } = {}) {
  return {
    visible: Boolean(frame?.visible || activeIntervention),
    state: frame?.state || "inactive",
    expression: frame?.expression || "neutral",
    posture: frame?.posture || "idle",
    animationKey: frame?.animationKey || "avatar.idle",
    renderer: frame?.renderer || "css-fallback",
    intervention: activeIntervention
      ? {
          id: activeIntervention.id,
          type: activeIntervention.interventionType,
          priority: activeIntervention.priority
        }
      : null
  };
}
