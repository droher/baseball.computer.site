<script lang="ts">
  import type { EditorView } from "@codemirror/view";
  import {
    getHistoryState,
    type HistoryEntry,
  } from "$lib/state/history.svelte";

  let {
    view,
    onLoad,
  }: {
    view: EditorView | undefined;
    onLoad?: (query: string) => void;
  } = $props();

  const historyState = getHistoryState();

  let open = $state(false);

  const truncatePreview = (s: string): string => {
    const oneLine = s.replace(/\s+/g, " ").trim();
    return oneLine.length > 80 ? `${oneLine.slice(0, 80)}…` : oneLine;
  };

  const formatTime = (ts: number): string => {
    const d = new Date(ts);
    return d.toLocaleString();
  };

  const statusBadge = (s: HistoryEntry["status"]): string => {
    switch (s) {
      case "success":
        return "badge-success";
      case "failure":
        return "badge-error";
      case "cancelled":
        return "badge-warning";
      case "running":
        return "badge-info";
    }
  };

  const loadEntry = (entry: HistoryEntry) => {
    if (view) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: entry.query },
      });
      view.focus();
    }
    onLoad?.(entry.query);
    open = false;
  };
</script>

<div class="dropdown dropdown-end">
  <button
    type="button"
    class="btn btn-ghost"
    aria-haspopup="menu"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    Recent
    {#if historyState.entries.length > 0}
      <span class="badge badge-sm">{historyState.entries.length}</span>
    {/if}
  </button>
  {#if open}
    <div
      role="menu"
      class="dropdown-content z-10 bg-base-100 border-base-300 mt-1 w-96 max-w-[90vw] max-h-[60vh] overflow-y-auto rounded-box border shadow"
    >
      <div
        class="text-base-content/60 border-base-300 flex items-center justify-between border-b p-2 text-xs"
      >
        <span title="Stored in your browser; cleared if you clear site data.">
          Stored locally • {historyState.entries.length}/50
        </span>
        {#if historyState.entries.length > 0}
          <button
            type="button"
            class="btn btn-ghost btn-xs"
            onclick={() => historyState.clear()}
          >
            Clear
          </button>
        {/if}
      </div>
      {#if historyState.entries.length === 0}
        <p class="text-base-content/60 p-3 text-center text-sm">
          No queries run yet.
        </p>
      {:else}
        <ul class="divide-base-300 divide-y">
          {#each historyState.entries as entry (entry.id)}
            <li class="hover:bg-base-200 p-2">
              <div class="flex items-start gap-2">
                <span class="badge badge-xs {statusBadge(entry.status)}">
                  {entry.status}
                </span>
                <div class="min-w-0 grow">
                  <pre class="truncate font-mono text-xs">{truncatePreview(
                      entry.query
                    )}</pre>
                  <div
                    class="text-base-content/60 mt-0.5 flex flex-wrap gap-2 text-xs"
                  >
                    <span>{formatTime(entry.timestamp)}</span>
                    {#if entry.ms !== undefined}
                      <span>{entry.ms} ms</span>
                    {/if}
                    {#if entry.rows !== undefined}
                      <span>{entry.rows.toLocaleString()} rows</span>
                    {/if}
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-xs btn-primary"
                  onclick={() => loadEntry(entry)}
                >
                  Load
                </button>
              </div>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
</div>
