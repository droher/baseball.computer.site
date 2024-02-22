<script lang="ts">
  import "@fontsource/roboto-mono";
  import "@finos/perspective-viewer/dist/css/pro.css";
  import "@finos/perspective-viewer/dist/css/pro-dark.css";

  import { onMount } from "svelte";
  import perspective, { type PerspectiveWorker } from "@finos/perspective";
  import type { IPerspectiveViewerElement } from "@finos/perspective-viewer";
  import { Table, tableToIPC } from "apache-arrow";

  import { QueryStatus, queryStatus, db } from "$lib/stores";

  export let query: string;

  let viewer1: IPerspectiveViewerElement;
  let worker: PerspectiveWorker;
  let hidden = true;
  let error_message: string = "";

  $: {
    if (query && $queryStatus === QueryStatus.Ready) {
      getTable()
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
  }

  const getTable = async () => {
    // TODO: Investigate why buffer length > 1 seems to cause random ints
    // to appear in null int values
    const BUFFER_LENGTH = 1;

    queryStatus.set(QueryStatus.Running);
    error_message = "";

    let pTable;
    let batch_buffer = [];
    const conn =
      $db ??
      (() => {
        throw new Error("No database connection");
      })();

    for await (const { batch, done } of conn.getBatches(query)) {
      batch_buffer.push(batch);
      if (batch_buffer.length >= BUFFER_LENGTH || done) {
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

    const workerSettings = {
      types: {
        integer: {
          format: {
            useGrouping: false,
          },
        },
        float: {
          format: {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
          },
        },
        date: {
          format: {
            dateStyle: undefined,
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
        },
      },
    };

    // @ts-ignore (this seems to be where formatting needs to get passed)
    worker = perspective.shared_worker(workerSettings);
  });
</script>

{#if error_message}
  <div class="alert alert-error">{error_message}</div>
{/if}
<perspective-viewer {hidden} bind:this={viewer1} class="grow min-h-[50vh]" />
