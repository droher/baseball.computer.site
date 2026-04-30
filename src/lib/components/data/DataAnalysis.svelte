<script lang="ts">
  import "@fontsource/roboto-mono";
  import "@finos/perspective-viewer/dist/css/pro.css";
  import "@finos/perspective-viewer/dist/css/pro-dark.css";

  import { onMount } from "svelte";
  import type { Table as PspTable } from "@finos/perspective";
  import type { HTMLPerspectiveViewerElement } from "@finos/perspective-viewer";
  import { Table, tableToIPC } from "apache-arrow";

  import { getDbState } from "$lib/state/db.svelte";
  import { getPerspectiveState } from "$lib/state/perspective.svelte";

  let {
    initialQuery,
    onReady,
  }: {
    initialQuery: string | undefined;
    onReady?: (run: (q: string) => Promise<void>) => void;
  } = $props();

  const dbState = getDbState();
  const psp = getPerspectiveState();

  let viewerNode: HTMLPerspectiveViewerElement | undefined;
  let pTable: PspTable | undefined;
  let hidden = $state(true);
  let runToken = 0;

  const disposeTable = async (t: PspTable | undefined) => {
    if (!t) return;
    try {
      await t.delete();
    } catch {
      // already disposed; ignore
    }
  };

  const attachViewer = (node: Element) => {
    viewerNode = node as HTMLPerspectiveViewerElement;
    return () => {
      viewerNode = undefined;
      const stale = pTable;
      pTable = undefined;
      void (node as HTMLPerspectiveViewerElement).delete();
      void disposeTable(stale);
    };
  };

  async function run(query: string): Promise<void> {
    if (!query) return;
    const myToken = ++runToken;
    const c = await psp.getClient();
    if (myToken !== runToken) return;

    const { start } = dbState.beforeQuery();
    let rows = 0;
    // dispose the previous table before reassigning so wasm memory is freed
    const previous = pTable;
    pTable = undefined;
    await disposeTable(previous);

    try {
      // BUFFER_LENGTH > 1 causes spurious ints in null int columns
      const BUFFER_LENGTH = 1;
      let batch_buffer: import("apache-arrow").RecordBatch[] = [];

      for await (const { batch, done } of dbState.getBatches(query)) {
        if (myToken !== runToken) {
          await disposeTable(pTable);
          pTable = undefined;
          dbState.queryCancelled(start);
          return;
        }
        batch_buffer.push(batch);
        rows += batch.numRows;
        if (batch_buffer.length >= BUFFER_LENGTH || done) {
          const arrowTable = new Table(batch_buffer);
          batch_buffer = [];
          const ipc = tableToIPC(arrowTable, "file");
          const buf = ipc.buffer.slice(
            ipc.byteOffset,
            ipc.byteOffset + ipc.byteLength
          ) as ArrayBuffer;
          if (pTable === undefined) {
            pTable = await c.table(buf);
            if (viewerNode) await viewerNode.load(Promise.resolve(pTable));
          } else {
            await pTable.update(buf);
          }
        }
      }
      hidden = false;
      dbState.querySucceeded(start, rows);
    } catch (err) {
      const e = err as Error;
      const msg = e.message?.includes(
        "Must pass at least one record batch or an explicit Schema"
      )
        ? "Query returned 0 rows."
        : e.message;
      dbState.queryFailed(start, new Error(msg));
    }
  }

  onMount(() => {
    // Headless browsers (Playwright Firefox) report navigator.languages
    // as ["undefined"] or []; perspective's wasm forwards it to
    // Intl.NumberFormat which throws on invalid tags.
    const valid = (l: unknown): l is string =>
      typeof l === "string" && l.length > 0 && l !== "undefined";
    const langs = (navigator.languages ?? []).filter(valid);
    if (langs.length === 0) {
      Object.defineProperty(navigator, "languages", {
        value: [valid(navigator.language) ? navigator.language : "en-US"],
        configurable: true,
      });
    }

    onReady?.(run);
    if (initialQuery) {
      void run(initialQuery);
    }
  });
</script>

{#if dbState.error}
  <div class="alert alert-error">{dbState.error}</div>
{/if}
<perspective-viewer
  {hidden}
  {@attach attachViewer}
  class="grow min-h-[50vh]"
  locale="en-US"
></perspective-viewer>
