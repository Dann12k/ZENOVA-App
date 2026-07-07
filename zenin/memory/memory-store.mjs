import { createId } from "../utils/guards.mjs";

/**
 * Almacen de memoria por alcance.
 *
 * No depende de OpenAI. Puede funcionar con almacenamiento local, servidor o
 * memoria en runtime cuando se conecten adaptadores posteriores.
 */
export class ZeninMemoryStore {
  constructor({ policy = {} } = {}) {
    this.policy = policy;
    this.scopes = {
      session: new Map(),
      shortTerm: new Map(),
      longTerm: new Map(),
      contextual: new Map()
    };
  }

  upsert(scope, key, value, metadata = {}) {
    this.ensureScope(scope);
    const now = Date.now();
    const ttl = metadata.ttlMs ?? this.policy.scopes?.[scope]?.defaultTtlMs ?? null;
    const entry = {
      id: metadata.id || createId("memory"),
      key,
      value,
      scope,
      source: metadata.source || "unknown",
      purpose: metadata.purpose || "unspecified",
      consentRef: metadata.consentRef || null,
      createdAt: metadata.createdAt || new Date(now).toISOString(),
      updatedAt: new Date(now).toISOString(),
      expiresAt: ttl ? new Date(now + ttl).toISOString() : null
    };
    this.scopes[scope].set(key, entry);
    return entry;
  }

  read(scope, key) {
    this.ensureScope(scope);
    this.prune(scope);
    return this.scopes[scope].get(key) || null;
  }

  forget(scope, key) {
    this.ensureScope(scope);
    return this.scopes[scope].delete(key);
  }

  summarize() {
    this.pruneAll();
    return Object.fromEntries(
      Object.entries(this.scopes).map(([scope, entries]) => [
        scope,
        [...entries.values()].map((entry) => ({
          key: entry.key,
          purpose: entry.purpose,
          source: entry.source,
          updatedAt: entry.updatedAt,
          expiresAt: entry.expiresAt
        }))
      ])
    );
  }

  pruneAll() {
    Object.keys(this.scopes).forEach((scope) => this.prune(scope));
  }

  prune(scope) {
    this.ensureScope(scope);
    const now = Date.now();
    this.scopes[scope].forEach((entry, key) => {
      if (entry.expiresAt && Date.parse(entry.expiresAt) <= now) this.scopes[scope].delete(key);
    });
  }

  ensureScope(scope) {
    if (!this.scopes[scope]) throw new Error(`Unknown ZENIN memory scope: ${scope}`);
  }
}
