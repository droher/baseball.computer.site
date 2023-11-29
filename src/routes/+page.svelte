<script lang="ts">
	import QueryInput from '$lib/components/data/QueryInput.svelte';
	import DataAnalysis from '$lib/components/data/DataAnalysis.svelte';

</script>

<main class="grow flex flex-col min-h-fit">
	<QueryInput />
	<div class="flex flex-row space-x-4 m-2">
		<button class="btn btn-primary flex-auto basis-1/2">Analyze</button>
		<button class="btn btn-accent flex-auto">CSV</button>
		<button class="btn btn-accent flex-auto">Parquet</button>
		<button class="btn btn-accent flex-auto">XLS</button>
	</div>
	<DataAnalysis />
</main>