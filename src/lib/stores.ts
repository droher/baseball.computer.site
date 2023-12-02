import { writable } from "svelte/store";
import { DbContextManager } from "./io/db";
import { browser } from "$app/environment";

export enum QueryStatus {
  Success,
  Running,
  Ready,
  Failure,
  Idle,
}

export const queryStatus = writable<QueryStatus>(QueryStatus.Idle);

export const db = writable<DbContextManager | null>(null, (set) => {
  const startDb = async () => {
    set(await DbContextManager.init());
  };
  if (browser) {
    startDb();
  };
});