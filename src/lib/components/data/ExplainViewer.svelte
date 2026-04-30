<script lang="ts">
  import { getDbState } from "$lib/state/db.svelte";
  import { friendlyQueryError } from "$lib/util/error-message";
  import { track } from "$lib/telemetry";

  let { query }: { query: string } = $props();

  const dbState = getDbState();

  let plan = $state<string | null>(null);
  let error = $state<string | null>(null);
  let running = $state<"plain" | "analyze" | null>(null);

  const run = async (mode: "plain" | "analyze") => {
    const trimmed = query.trim();
    if (!trimmed || running) return;
    running = mode;
    plan = null;
    error = null;
    try {
      const text = await dbState.explain(trimmed, mode === "analyze");
      plan = text || "(empty plan)";
      track("explain_run", { analyze: mode === "analyze" });
    } catch (err) {
      const e = err as Error;
      error = friendlyQueryError(e.message ?? String(e));
    } finally {
      running = null;
    }
  };

  const close = () => {
    plan = null;
    error = null;
  };
</script>

<div class="m-2 flex flex-row flex-wrap items-center gap-2">
  <button
    type="button"
    class="btn btn-outline btn-sm"
    disabled={running !== null || !query.trim()}
    onclick={() => run("plain")}
  >
    {running === "plain" ? "Explaining…" : "EXPLAIN"}
  </button>
  <button
    type="button"
    class="btn btn-outline btn-sm"
    disabled={running !== null || !query.trim()}
    onclick={() => run("analyze")}
    title="Runs the query to capture timing — may be slow"
  >
    {running === "analyze" ? "Analyzing…" : "EXPLAIN ANALYZE"}
  </button>
  {#if plan || error}
    <button type="button" class="btn btn-ghost btn-sm" onclick={close}>
      Close
    </button>
  {/if}
  <span class="text-base-content/60 text-xs">
    EXPLAIN ANALYZE executes the query.
  </span>
</div>
{#if error}
  <div class="alert alert-error mx-2">{error}</div>
{/if}
{#if plan}
  <pre
    class="bg-base-200 mx-2 max-h-[40vh] overflow-auto rounded p-2 text-xs whitespace-pre">{plan}</pre>
{/if}
