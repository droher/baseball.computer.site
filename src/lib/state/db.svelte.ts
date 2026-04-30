import { browser } from "$app/environment";
import { createContext } from "svelte";
import type { RecordBatch } from "apache-arrow";
import { DbContextManager } from "$lib/io/db";
import { track } from "$lib/telemetry";

export enum QueryStatus {
  Success,
  Running,
  Ready,
  Failure,
  Idle,
}

export class DbState {
  status: QueryStatus = $state(QueryStatus.Idle);
  error: string = $state("");
  manager: DbContextManager | null = $state(null);
  private initPromise: Promise<DbContextManager> | null = null;

  init(): Promise<DbContextManager> {
    if (!browser) {
      return Promise.reject(new Error("DbState only initializes in browser"));
    }
    if (!this.initPromise) {
      this.initPromise = DbContextManager.init().then((m) => {
        this.manager = m;
        return m;
      });
    }
    return this.initPromise;
  }

  async *getBatches(
    query: string
  ): AsyncGenerator<{ batch: RecordBatch; done: boolean }> {
    const m = await this.init();
    yield* m.getBatches(query);
  }

  async copyToBuffer(
    query: string,
    format: "csv" | "parquet"
  ): Promise<Uint8Array> {
    const m = await this.init();
    return m.copyToBuffer(query, format);
  }

  beforeQuery(): { start: number } {
    this.status = QueryStatus.Running;
    this.error = "";
    track("query_started");
    return { start: performance.now() };
  }

  querySucceeded(start: number, rowCount: number): void {
    this.status = QueryStatus.Success;
    track("query_succeeded", {
      ms: Math.round(performance.now() - start),
      rows: rowCount,
    });
  }

  queryFailed(start: number, err: unknown): void {
    const error = err instanceof Error ? err : new Error(String(err));
    this.status = QueryStatus.Failure;
    this.error = error.message;
    track("query_failed", {
      ms: Math.round(performance.now() - start),
      error_class: error.name,
    });
  }

  queryCancelled(start: number): void {
    track("query_cancelled", {
      ms: Math.round(performance.now() - start),
    });
  }
}

export const [getDbState, setDbState] = createContext<DbState>();
