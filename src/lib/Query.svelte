<script lang="ts">
	import { getBoxballFiles } from './boxball-files';
	import { DbContextManager } from './db';
	import { db } from './stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { Table } from 'apache-arrow';
	import PrettyTable from '$lib/PrettyTable.svelte'
	import CodeMirror from './CodeMirror.svelte';

	let result: Promise<Table> = new Promise((resolve) => {});

	let query_string = `SELECT * 
FROM game 
LIMIT 100
	`;

	const query = () => {
		if (browser && typeof $db !== 'undefined') {
			result = $db.conn.query(query_string);
		}
	};

	$: is_db_loaded = typeof $db !== 'undefined';

	onMount(async () => {
		const headers = new Headers()
		if (!is_db_loaded) {
			$db = await DbContextManager.init(getBoxballFiles());
		}
	});
</script>

<section>
	<CodeMirror bind:value={query_string}/>
	<button disabled={!is_db_loaded} class="btn btn-primary btn-lg" on:click={() => query()}>Submit</button>

	
	<div class="flex grow">
		{#await result then arrow_table}
			{#key arrow_table}
				<PrettyTable arrow_table={arrow_table} />
			{/key}
		{/await}
	</div>
</section>

