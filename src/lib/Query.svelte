<script lang="ts">
	import PrettyTable from '$lib/PrettyTable.svelte';
	import { getBoxballFiles } from './boxball-files';
	import { DbContextManager, getTableFields } from './db';
	import { db } from './stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import type { Table } from 'apache-arrow';

	let result: Promise<Table> = new Promise((resolve) => {});

	let query_string = `SELECT * FROM batting LIMIT 100`;

	const query = () => {
		if (browser && typeof $db !== 'undefined') {
			result = $db.conn.query(query_string);
		}
	};

	onMount(async () => {
		if (typeof $db === 'undefined') {
			$db = await DbContextManager.init(getBoxballFiles());
		}
	});
</script>

<textarea bind:value={query_string} />
<p />
{#if typeof $db !== 'undefined'}
	<button class="bg-white text-black border-l-2" on:click={() => query()}>Submit</button>
{/if}

<div class="flex-grow">
	{#await result then data}
		{#key data}
			<PrettyTable fields={getTableFields(data)} data={data.toArray()} />
		{/key}
	{/await}
</div>
