/**
 * Historial tecnico con retencion limitada.
 *
 * Guarda eventos serializables y permite consultas simples. No debe usarse como
 * memoria permanente del usuario.
 */
export class ZeninHistoryStore {
  constructor({ limit = 250 } = {}) {
    this.limit = limit;
    this.items = [];
  }

  append(entry) {
    const normalized = {
      ...entry,
      recordedAt: new Date().toISOString()
    };
    this.items.unshift(normalized);
    this.items = this.items.slice(0, this.limit);
    return normalized;
  }

  findByType(type, limit = 20) {
    return this.items.filter((item) => item.type === type).slice(0, limit);
  }

  snapshot() {
    return this.items.map((item) => ({ ...item }));
  }
}
