import { readable, writable } from "svelte/store";

export enum QueryStatus {
  Success,
  Running,
  Failure,
  Idle,
}

export const queryStatus = writable<QueryStatus>(QueryStatus.Idle);
