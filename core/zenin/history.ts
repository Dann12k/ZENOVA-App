import {
  ZeninEvent,
  ZeninHistoryRecord,
  ZeninStorageProvider,
  createId,
  nowIso,
  safeJsonParse
} from "./state";
import { createLocalStorageProvider } from "./memory";

export const ZENIN_HISTORY_KEY = "zenin.core.history.v1";

export class HistoryService {
  private cache: ZeninHistoryRecord[] | null = null;

  constructor(
    private readonly provider: ZeninStorageProvider = createLocalStorageProvider(),
    private readonly key = ZENIN_HISTORY_KEY
  ) {}

  async append(record: Omit<ZeninHistoryRecord, "id" | "createdAt"> & { id?: string; createdAt?: string }): Promise<ZeninHistoryRecord> {
    const nextRecord: ZeninHistoryRecord = {
      id: record.id || createId("history"),
      createdAt: record.createdAt || nowIso(),
      type: record.type,
      source: record.source,
      payload: record.payload
    };
    const current = await this.all();
    const next = [...current, nextRecord];
    this.cache = next;
    await Promise.resolve(this.provider.setItem(this.key, JSON.stringify(next)));
    return nextRecord;
  }

  async appendEvent(event: ZeninEvent): Promise<ZeninHistoryRecord> {
    return this.append({
      id: event.id,
      createdAt: event.createdAt,
      type: "event",
      source: event.source,
      payload: event
    });
  }

  async all(): Promise<ZeninHistoryRecord[]> {
    if (this.cache) return this.cache;
    const raw = await Promise.resolve(this.provider.getItem(this.key));
    const parsed = safeJsonParse<ZeninHistoryRecord[]>(raw, []);
    this.cache = Array.isArray(parsed) ? parsed : [];
    return this.cache;
  }

  async recent(limit = 80): Promise<ZeninHistoryRecord[]> {
    const all = await this.all();
    return all.slice(-limit).reverse();
  }

  async findByType(type: ZeninHistoryRecord["type"], limit = 80): Promise<ZeninHistoryRecord[]> {
    const all = await this.all();
    return all.filter((item) => item.type === type).slice(-limit).reverse();
  }

  async reconstructUserStory(): Promise<{
    firstSeenAt: string | null;
    lastSeenAt: string | null;
    totalRecords: number;
    meaningfulMoments: ZeninHistoryRecord[];
  }> {
    const all = await this.all();
    return {
      firstSeenAt: all[0]?.createdAt || null,
      lastSeenAt: all[all.length - 1]?.createdAt || null,
      totalRecords: all.length,
      meaningfulMoments: all
        .filter((item) => ["event", "insight", "recommendation"].includes(item.type))
        .slice(-30)
        .reverse()
    };
  }
}

export function createHistoryService(provider?: ZeninStorageProvider): HistoryService {
  return new HistoryService(provider || createLocalStorageProvider());
}
