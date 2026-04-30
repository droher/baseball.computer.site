<script lang="ts">
  import "@fontsource/roboto-mono";
  import "@finos/perspective-viewer/dist/css/pro.css";
  import "@finos/perspective-viewer/dist/css/pro-dark.css";

  import { onMount } from "svelte";
  import perspective from "@finos/perspective";
  import type { Client, Table as PspTable } from "@finos/perspective";
  import type { HTMLPerspectiveViewerElement } from "@finos/perspective-viewer";
  import SERVER_WASM from "@finos/perspective/dist/wasm/perspective-server.wasm?url";
  import CLIENT_WASM from "@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm?url";
  import { Table, tableToIPC } from "apache-arrow";

  import { QueryStatus, queryStatus, db } from "$lib/stores";

  let { query }: { query: string | undefined } = $props();

  let viewer1: HTMLPerspectiveViewerElement;
  let client: Client | undefined = $state();
  let hidden = $state(true);
  let error_message = $state("");

  $effect(() => {
    if (query && $queryStatus === QueryStatus.Ready && client) {
      runQuery(client, query)
        .catch((e: Error) => {
          if (
            e.message.includes(
              "Must pass at least one record batch or an explicit Schema"
            )
          ) {
            error_message = "Query returned 0 rows.";
          } else {
            error_message = e.message;
          }
        })
        .finally(() => {
          queryStatus.set(QueryStatus.Idle);
        });
    }
  });

  const runQuery = async (c: Client, q: string) => {
    // TODO: BUFFER_LENGTH > 1 causes spurious ints in null int columns
    const BUFFER_LENGTH = 1;

    queryStatus.set(QueryStatus.Running);
    error_message = "";

    let pTable: PspTable | undefined;
    let batch_buffer: import("apache-arrow").RecordBatch[] = [];
    const conn =
      $db ??
      (() => {
        throw new Error("No database connection");
      })();

    for await (const { batch, done } of conn.getBatches(q)) {
      batch_buffer.push(batch);
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
          await viewer1.load(Promise.resolve(pTable));
        } else {
          await pTable.update(buf);
        }
      }
    }
    hidden = false;

    return pTable;
  };

  onMount(async () => {
    // Headless browsers (Playwright Firefox) may report navigator.languages
    // as ["undefined"] or [], which perspective's wasm feeds to
    // Intl.NumberFormat and throws "invalid language tag".
    const valid = (l: unknown): l is string =>
      typeof l === "string" && l.length > 0 && l !== "undefined";
    const langs = (navigator.languages ?? []).filter(valid);
    if (langs.length === 0) {
      Object.defineProperty(navigator, "languages", {
        value: [valid(navigator.language) ? navigator.language : "en-US"],
        configurable: true,
      });
    }

    const perspective_viewer = (await import("@finos/perspective-viewer"))
      .default;
    await import("@finos/perspective-viewer-d3fc");
    await import("@finos/perspective-viewer-datagrid");

    perspective.init_server(fetch(SERVER_WASM));
    perspective_viewer.init_client(fetch(CLIENT_WASM));

    client = await perspective.worker();
  });
</script>

{#if error_message}
  <div class="alert alert-error">{error_message}</div>
{/if}
<perspective-viewer
  {hidden}
  bind:this={viewer1}
  class="grow min-h-[50vh]"
  locale="en-US"
></perspective-viewer>
