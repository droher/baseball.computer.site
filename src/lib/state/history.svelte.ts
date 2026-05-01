import { browser } from "$app/environment";
import { createContext } from "svelte";

export type HistoryStatus = "running" | "success" | "failure" | "cancelled";

export type HistoryEntry = {
  id: string;
  query: string;
  timestamp: number;
  status: HistoryStatus;
  ms?: number;
  rows?: number;
  error?: string;
};

const STORAGE_KEY = "bc.queryHistory.v1";
const MAX_ENTRIES = 50;
const MAX_QUERY_BYTES = 4 * 1024;

const truncate = (s: string): string =>
  s.length > MAX_QUERY_BYTES ? s.slice(0, MAX_QUERY_BYTES) : s;

const isEntry = (v: unknown): v is HistoryEntry => {
  if (!v || typeof v !== "object") return false;
  const e = v as Record<string, unknown>;
  return (
    typeof e.id === "string" &&
    typeof e.query === "string" &&
    typeof e.timestamp === "number" &&
    (e.status === "running" ||
      e.status === "success" ||
      e.status === "failure" ||
      e.status === "cancelled")
  );
};

const loadFromStorage = (): HistoryEntry[] => {
  if (!browser) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const valid = parsed.filter(isEntry);
    // Stale "running" entries (page reload mid-query) become cancelled.
    return valid.map((e) =>
      e.status === "running" ? { ...e, status: "cancelled" as const } : e
    );
  } catch {
    return [];
  }
};

export class HistoryState {
  entries: HistoryEntry[] = $state([]);

  constructor() {
    this.entries = loadFromStorage();
  }

  private persist(): void {
    if (!browser) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    } catch {
      // quota exceeded or storage disabled; drop silently
    }
  }

  /** Append a new running entry. Returns its id so callers can finalize. */
  start(query: string): string {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const entry: HistoryEntry = {
      id,
      query: truncate(query),
      timestamp: Date.now(),
      status: "running",
    };
    this.entries = [entry, ...this.entries].slice(0, MAX_ENTRIES);
    this.persist();
    return id;
  }

  finalize(
    id: string,
    patch: { status: HistoryStatus; ms?: number; rows?: number; error?: string }
  ): void {
    const idx = this.entries.findIndex((e) => e.id === id);
    if (idx === -1) return;
    const next = [...this.entries];
    next[idx] = { ...next[idx], ...patch };
    this.entries = next;
    this.persist();
  }

  clear(): void {
    this.entries = [];
    this.persist();
  }

  remove(id: string): void {
    this.entries = this.entries.filter((e) => e.id !== id);
    this.persist();
  }
}

export const [getHistoryState, setHistoryState] = createContext<HistoryState>();
