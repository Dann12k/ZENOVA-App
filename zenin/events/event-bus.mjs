import { assertObject, createId } from "../utils/guards.mjs";

const WILDCARD = "*";

/**
 * Event bus desacoplado.
 *
 * ZENIN observa eventos por suscripcion. Ningun modulo debe depender de botones
 * o secciones concretas del dashboard.
 */
export class ZeninEventBus {
  constructor() {
    this.handlers = new Map();
  }

  on(type, handler) {
    if (typeof handler !== "function") throw new TypeError("handler must be a function");
    const key = String(type || WILDCARD);
    const list = this.handlers.get(key) || new Set();
    list.add(handler);
    this.handlers.set(key, list);
    return () => this.off(key, handler);
  }

  off(type, handler) {
    const list = this.handlers.get(String(type || WILDCARD));
    if (!list) return false;
    return list.delete(handler);
  }

  publish(type, payload = {}, meta = {}) {
    assertObject(payload, "event payload");
    const event = Object.freeze({
      id: createId("event"),
      type: String(type),
      payload: Object.freeze({ ...payload }),
      meta: Object.freeze({ ...meta }),
      createdAt: new Date().toISOString()
    });

    this.dispatch(event.type, event);
    this.dispatch(WILDCARD, event);
    return event;
  }

  dispatch(type, event) {
    const list = this.handlers.get(type);
    if (!list) return;
    list.forEach((handler) => handler(event));
  }
}
