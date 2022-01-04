<script lang="ts">
	import PrettyTable from '$lib/PrettyTable.svelte';
	import { addTables, getDB, getTableFields } from './conn';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';

	var conn;
	var db;
	var dbLoaded = false;
	
	let result = new Promise((resolve) => {});

	let query_string = `SELECT * FROM batting LIMIT 100`;

	async function query(q: string) {
		if (browser) {
			while (!dbLoaded) {
				console.log("Not loaded yet")
				setTimeout(() => {}, 1000)
			}
			result = await conn.query(q);
		}
	}

	onMount(async () => {
		db = await getDB();
		conn = await db.connect();
		await addTables(conn);
		dbLoaded = true;
	});

	onDestroy(async () => {
		if (browser) {
			await conn.close();
			await db.terminate();
		}
	});
</script>

<textarea bind:value={query_string} />
<p />
<button class="bg-white text-black border-l-2" on:click={() => query(query_string)}>Submit</button>

<div class="flex-grow">
	{#await result then data}
		<PrettyTable fields={getTableFields(data)} data={data.toArray()} />
	{/await}
</div>
