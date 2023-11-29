<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import perspective, { type PerspectiveWorker } from "@finos/perspective";
    import "@finos/perspective-viewer/dist/css/themes.css";

    import type { IPerspectiveViewerElement } from "@finos/perspective-viewer";
	import { DbContextManager } from "$lib/io/db";
	import { Table, tableToIPC } from "apache-arrow";

    let viewer1: IPerspectiveViewerElement;
    // Hack that seems to prevent malformed view from rendering
    let datagrid: typeof import("@finos/perspective-viewer-datagrid");

    let db: DbContextManager;

    const getTable = async (worker: PerspectiveWorker, query: string) => {
        let pTable;
        let batch_buffer = [];

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

        return pTable;
    };

    // Async funtion to load the table
    const loadTable = async () => {
        await import ("@finos/perspective-viewer");
        await import ("@finos/perspective-viewer-d3fc");
        datagrid = await import ("@finos/perspective-viewer-datagrid");
        db = await DbContextManager.init();
    
        const worker = perspective.shared_worker();
        const query = "SELECT * FROM player_game_offense_lines LIMIT 5000"
        await getTable(worker, query);

    };

    onMount(() => {
        loadTable();
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
