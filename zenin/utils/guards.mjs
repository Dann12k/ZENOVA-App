/**
 * Utilidades compartidas del nucleo de ZENIN.
 */
export function assertObject(value, label = "value") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`${label} must be an object`);
  }
}

export function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

export function average(values) {
  const numeric = safeArray(values).map(Number).filter((value) => Number.isFinite(value));
  if (!numeric.length) return 0;
  return numeric.reduce((sum, value) => sum + value, 0) / numeric.length;
}

export function hourFromIso(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return null;
  return date.getHours();
}

export function pickFields(source, fields) {
  return fields.reduce((target, field) => {
    if (source[field] !== undefined && source[field] !== null) target[field] = source[field];
    return target;
  }, {});
}

export function createId(prefix = "zenin") {
  const randomPart = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${randomPart}`;
}
