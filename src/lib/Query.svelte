<script lang="ts">
	import PrettyTable from '$lib/PrettyTable.svelte';
	import { addTables, getDB, getTableFields } from './conn';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';

	let db;
	let conn;
	let mounted = new Promise((resolve) => {});
	let result = new Promise((resolve) => {});

	let query_string = `SELECT * FROM batting LIMIT 100`;

	async function query(q: string) {
		if (browser) {
			await mounted;
			result = await conn.query(q);
		}
	}

	onMount(async () => {
		db = await getDB();
		conn = await db.connect();
		await addTables(conn);
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

<div class="flex-grow" >
	{#await result then data}
		<PrettyTable fields={getTableFields(data)} data={data.toArray()} />
	{/await}
</div>
