<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import { onMount, untrack } from "svelte";
  import type { EditorView } from "@codemirror/view";

  import QueryInput from "$lib/components/data/QueryInput.svelte";
  import DataAnalysis from "$lib/components/data/DataAnalysis.svelte";
  import Rube from "$lib/components/data/Rube.svelte";
  import SchemaBrowser from "$lib/components/data/SchemaBrowser.svelte";
  import QueryHistory from "$lib/components/data/QueryHistory.svelte";
  import ExplainViewer from "$lib/components/data/ExplainViewer.svelte";
  import LocalFiles from "$lib/components/data/LocalFiles.svelte";
  import PageHead from "$lib/components/PageHead.svelte";
  import { EXAMPLE_QUERY } from "$lib/components/data/example-query";
  import { getDbState, QueryStatus } from "$lib/state/db.svelte";
  import { SchemaState, setSchemaState } from "$lib/state/schema.svelte";
  import { getHistoryState } from "$lib/state/history.svelte";
  import { encodeQuery, decodeQuery } from "$lib/util/query-url";
  import { downloadResult } from "$lib/util/download";
  import { friendlyQueryError } from "$lib/util/error-message";
  import type { PageData } from "./$types";

  const rubeStrings = ["rube", "waddell", "waddr101"];
  const dbState = getDbState();
  const historyState = getHistoryState();

  let { data }: { data: PageData } = $props();

  const schemaState = setSchemaState(
    new SchemaState(untrack(() => data.schema))
  );

  const initial = browser
    ? decodeQuery(page.url.searchParams.get("query"))
    : "";
  let query: string | undefined = $state(initial || undefined);
  let text = $state(initial || EXAMPLE_QUERY);
  let downloading = $state<"csv" | "parquet" | null>(null);
  let runQuery: ((q: string) => Promise<void>) | undefined = $state();
  let editorView = $state<EditorView | undefined>();
  let pendingHistoryId: string | null = null;
  let runStartedAt = 0;
  let queryRows = 0;
  let drawerOpen = $state(false);

  let isRunning = $derived(dbState.status === QueryStatus.Running);
  let showRube = $derived(
    rubeStrings.some((s) => query?.toLowerCase().includes(s)) && isRunning
  );

  // Watch dbState transitions away from Running to finalize the
  // current pending history entry. Keeps DbState ignorant of history.
  $effect(() => {
    const status = dbState.status;
    if (!pendingHistoryId) return;
    if (status === QueryStatus.Running) return;
    const ms = Math.round(performance.now() - runStartedAt);
    if (status === QueryStatus.Success) {
      historyState.finalize(pendingHistoryId, {
        status: "success",
        ms,
        rows: queryRows,
      });
    } else if (status === QueryStatus.Failure) {
      historyState.finalize(pendingHistoryId, {
        status: "failure",
        ms,
        error: dbState.error,
      });
    } else {
      historyState.finalize(pendingHistoryId, { status: "cancelled", ms });
    }
    pendingHistoryId = null;
    queryRows = 0;
  });

  const handleQuery = async () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    query = trimmed;
    page.url.searchParams.set("query", encodeQuery(trimmed));
    void goto(page.url.toString(), {
      replaceState: true,
      keepFocus: true,
      noScroll: true,
    });
    if (runQuery) await runQuery(trimmed);
  };

  const handleStart = (q: string) => {
    pendingHistoryId = historyState.start(q);
    runStartedAt = performance.now();
    queryRows = 0;
  };

  const handleDownload = async (format: "csv" | "parquet") => {
    const trimmed = text.trim();
    if (!trimmed || downloading) return;
    downloading = format;
    dbState.error = "";
    try {
      await downloadResult(dbState, trimmed, format);
    } catch (err) {
      const e = err as Error;
      dbState.error = friendlyQueryError(e.message ?? String(e));
    } finally {
      downloading = null;
    }
  };

  const handleHistoryLoad = (q: string) => {
    text = q;
  };

  onMount(() => {
    void dbState.init();
  });
</script>

<PageHead
  title="Query Engine"
  description="Write SQL queries against the baseball.computer database"
/>
<main class="grow grid grid-cols-1 md:grid-cols-[16rem_1fr]">
  <aside
    class="hidden md:flex md:flex-col md:max-h-[calc(100vh-4rem)] md:overflow-hidden"
  >
    <SchemaBrowser view={editorView} />
    <LocalFiles />
  </aside>
  {#if drawerOpen}
    <div class="bg-base-100/40 fixed inset-0 z-20 md:hidden">
      <button
        type="button"
        class="absolute inset-0"
        aria-label="Close schema drawer"
        onclick={() => (drawerOpen = false)}
      ></button>
      <aside
        class="bg-base-100 absolute top-0 left-0 z-30 flex h-full w-72 flex-col"
      >
        <div class="border-base-300 flex justify-end border-b p-1">
          <button
            type="button"
            class="btn btn-ghost btn-sm"
            onclick={() => (drawerOpen = false)}
          >
            Close
          </button>
        </div>
        <div class="grow overflow-y-auto">
          <SchemaBrowser view={editorView} />
          <LocalFiles />
        </div>
      </aside>
    </div>
  {/if}
  <div class="flex flex-col">
    <QueryInput
      schema={schemaState.tables}
      schemaVersion={schemaState.version}
      bind:value={text}
      onReady={(v) => (editorView = v)}
    />
    <div class="flex flex-row flex-wrap gap-2 m-2">
      <button
        type="button"
        class="btn btn-ghost md:hidden"
        onclick={() => (drawerOpen = true)}
        aria-label="Open schema browser"
      >
        ☰
      </button>
      <button
        onclick={handleQuery}
        class="btn btn-primary flex-auto"
        disabled={isRunning || downloading !== null || !text.trim()}
      >
        {#if isRunning}
          <span class="animate-pulse">Running...</span>
        {:else}
          Analyze
        {/if}
      </button>
      <QueryHistory view={editorView} onLoad={handleHistoryLoad} />
      <button
        onclick={() => handleDownload("csv")}
        class="btn btn-accent"
        disabled={isRunning || downloading !== null || !text.trim()}
      >
        {downloading === "csv" ? "Building CSV..." : "Download CSV"}
      </button>
      <button
        onclick={() => handleDownload("parquet")}
        class="btn btn-accent"
        disabled={isRunning || downloading !== null || !text.trim()}
      >
        {downloading === "parquet" ? "Building Parquet..." : "Download Parquet"}
      </button>
    </div>
    <ExplainViewer query={text} />
    {#if showRube}
      <Rube />
    {/if}
    <DataAnalysis
      initialQuery={query}
      onReady={(fn) => (runQuery = fn)}
      onRows={(n) => (queryRows = n)}
      onStart={handleStart}
    />
  </div>
</main>
