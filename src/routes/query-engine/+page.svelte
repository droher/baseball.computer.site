<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import QueryInput from "$lib/components/data/QueryInput.svelte";
  import DataAnalysis from "$lib/components/data/DataAnalysis.svelte";
  import Rube from "$lib/components/data/Rube.svelte";
  import PageHead from "$lib/components/PageHead.svelte";
  import { EXAMPLE_QUERY } from "$lib/components/data/example-query";
  import { getDbState, QueryStatus } from "$lib/state/db.svelte";
  import { encodeQuery, decodeQuery } from "$lib/util/query-url";
  import { downloadResult } from "$lib/util/download";
  import type { PageData } from "./$types";

  const rubeStrings = ["rube", "waddell", "waddr101"];
  const dbState = getDbState();

  let { data }: { data: PageData } = $props();

  const initial = browser
    ? decodeQuery(page.url.searchParams.get("query"))
    : "";
  let query: string | undefined = $state(initial || undefined);
  let text = $state(initial || EXAMPLE_QUERY);
  let downloading = $state<"csv" | "parquet" | null>(null);
  let runQuery: ((q: string) => Promise<void>) | undefined = $state();

  let isRunning = $derived(dbState.status === QueryStatus.Running);
  let showRube = $derived(
    rubeStrings.some((s) => query?.toLowerCase().includes(s)) && isRunning
  );

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

  const handleDownload = async (format: "csv" | "parquet") => {
    const trimmed = text.trim();
    if (!trimmed || downloading) return;
    downloading = format;
    dbState.error = "";
    try {
      await downloadResult(dbState, trimmed, format);
    } catch (err) {
      const e = err as Error;
      dbState.error = e.message;
    } finally {
      downloading = null;
    }
  };

  onMount(() => {
    void dbState.init();
  });
</script>

<PageHead
  title="Query Engine"
  description="Write SQL queries against the baseball.computer database"
/>
<main class="grow flex flex-col">
  <QueryInput schema={data.schema} bind:value={text} />
  <div class="flex flex-row flex-wrap gap-2 m-2">
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
  {#if showRube}
    <Rube />
  {/if}
  <DataAnalysis initialQuery={query} onReady={(fn) => (runQuery = fn)} />
</main>
