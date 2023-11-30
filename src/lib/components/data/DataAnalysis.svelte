<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import perspective, { type PerspectiveWorker } from "@finos/perspective";
    import "@finos/perspective-viewer/dist/css/themes.css";

    import type { IPerspectiveViewerElement } from "@finos/perspective-viewer";
	import { DbContextManager } from "$lib/io/db";
	import { Table, tableToIPC } from "apache-arrow";

    import { QueryStatus, queryStatus } from "$lib/stores";

    export let query: string;

    let db: DbContextManager;
    let viewer1: IPerspectiveViewerElement;
    let worker: PerspectiveWorker;
    // Hack that seems to prevent malformed view from rendering
    let datagrid: typeof import("@finos/perspective-viewer-datagrid");

    $: {
        if (typeof query !== 'undefined') {
            getTable();
        }
    }

    const getTable = async () => {
        let pTable;
        let batch_buffer = [];

        queryStatus.set(QueryStatus.Running);
        for await (const {batch, done} of db.getBatches(query)) {
            batch_buffer.push(batch);
            if(batch_buffer.length >= 10 || done) {
                var arrowTable = new Table(batch_buffer);
                batch_buffer = [];
                var ipc = tableToIPC(arrowTable, 'file');
                if (typeof pTable === 'undefined') {
                    pTable = await worker.table(ipc.buffer);
                    await viewer1.load(pTable);
                } else {
                    pTable.update(ipc.buffer);
                }
            }
        }
        queryStatus.set(QueryStatus.Success);
        queryStatus.set(QueryStatus.Idle);

        return pTable;
    };

    onMount(async () => {
        await import ("@finos/perspective-viewer");
        await import ("@finos/perspective-viewer-d3fc");
        datagrid = await import ("@finos/perspective-viewer-datagrid");
        db = await DbContextManager.init();
    
        worker = perspective.shared_worker();   
    });

    onDestroy(async () => {
    if (typeof db !== 'undefined') {
        await db.close();
    }
});

</script>

{#if datagrid}
	<perspective-viewer bind:this={viewer1} class="grow min-h-[50vh]" />
{/if}
