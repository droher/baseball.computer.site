<script lang="ts">
  import "@fontsource/roboto-mono";
  import "@finos/perspective-viewer/dist/css/pro.css";
  import "@finos/perspective-viewer/dist/css/pro-dark.css";

  import { onDestroy, onMount } from "svelte";
  import perspective, { type PerspectiveWorker } from "@finos/perspective";

  import type { IPerspectiveViewerElement } from "@finos/perspective-viewer";
  import { Table, tableToIPC } from "apache-arrow";

  import { QueryStatus, queryStatus, db } from "$lib/stores";

  export let query: string;

  let viewer1: IPerspectiveViewerElement;
  let worker: PerspectiveWorker;
  let hidden = true;

  $: {
    if (typeof query !== "undefined") {
      getTable();
    }
  }

  const getTable = async () => {
    let pTable;
    let batch_buffer = [];
    const conn =
      $db ??
      (() => {
        throw new Error("No database connection");
      })();
    queryStatus.set(QueryStatus.Running);

    for await (const { batch, done } of conn.getBatches(query)) {
      batch_buffer.push(batch);
      if (batch_buffer.length >= 10 || done) {
        var arrowTable = new Table(batch_buffer);
        batch_buffer = [];
        var ipc = tableToIPC(arrowTable, "file");
        if (typeof pTable === "undefined") {
          pTable = await worker.table(ipc.buffer);
          await viewer1.load(pTable);
        } else {
          pTable.update(ipc.buffer);
        }
      }
    }
    queryStatus.set(QueryStatus.Success);
    queryStatus.set(QueryStatus.Idle);
    hidden = false;

    return pTable;
  };

  onMount(async () => {
    await import("@finos/perspective-viewer");
    await import("@finos/perspective-viewer-d3fc");
    await import("@finos/perspective-viewer-datagrid");

    worker = perspective.shared_worker();
  });
</script>

<perspective-viewer hidden={hidden} bind:this={viewer1} class="grow min-h-[50vh]" />
