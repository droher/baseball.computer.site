<script lang="ts">
	import QueryInput from '$lib/components/data/QueryInput.svelte';
	import DataAnalysis from '$lib/components/data/DataAnalysis.svelte';
	import { QueryStatus, queryStatus } from '$lib/stores';

	let query: string;
	let text: string;

	const handleQuery = () => {
		query = text;
	}
</script>

<main class="grow flex flex-col min-h-fit">
	<QueryInput bind:value={text} />
	<div class="flex flex-row space-x-4 m-2">
		<button on:click={handleQuery} class="btn btn-primary flex-auto basis-1/2">
			{#if $queryStatus === QueryStatus.Running}
				<span class="animate-pulse">Running...</span>
			{:else}
				Analyze
			{/if}
		</button>
		<button disabled class="btn btn-accent flex-auto">Download
			<select class="select bg-white max-w-xs">
				<option disabled selected>Format</option>
				<option>CSV</option>
				<option>Parquet</option>
			  </select>
			  (Coming Soon)
		</button>
	</div>
	<DataAnalysis query={query} />
</main>