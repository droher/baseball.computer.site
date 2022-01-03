<script lang="ts">
	import PrettyTable from '$lib/PrettyTable.svelte';
	import { addTable, getDB, getTableFields } from '$lib/conn';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';

	let db;
	let conn;
	let mounted = new Promise((resolve) => {});
	let result = new Promise((resolve) => {});

	let query_string = `SELECT * FROM batting`;

	async function query(q: string) {
		if (browser) {
			result = await conn.query(q);
		}
	}

	onMount(async () => {
		db = await getDB();
		conn = await db.connect();
		await addTable(conn, 'batting');
		mounted = Promise.resolve(0);
	});

	onDestroy(async () => {
		if (browser) {
			await conn.close();
			await db.terminate();
		}
	});
</script>

<textarea bind:value={query_string} />
<p></p>
<button class="bg-white text-black border-l-2" on:click={() => query(query_string)}>Submit</button>

<div class="h-full">
	{#await result then data}
		<PrettyTable fields={getTableFields(data)} data={data.toArray()} />
	{/await}
</div>
