<script lang="ts">
  import QueryInput from "$lib/components/data/QueryInput.svelte";
  import DataAnalysis from "$lib/components/data/DataAnalysis.svelte";
  import { QueryStatus, queryStatus } from "$lib/stores";

  let query: string;
  let text: string;

  const handleQuery = () => {
    query = text;
  };
</script>

<main class="grow flex flex-col">
  <QueryInput bind:value={text} />
  <div class="flex flex-row flex-wrap space-x-2 m-2">
    <button on:click={handleQuery} class="btn btn-primary flex-auto">
      {#if $queryStatus === QueryStatus.Running}
        <span class="animate-pulse">Running...</span>
      {:else}
        Analyze
      {/if}
    </button>
    <button class="btn btn-accent hidden"
      >Download
      <select class="select bg-white max-w-xs">
        <option disabled selected>Format</option>
        <option>CSV</option>
        <option>Parquet</option>
      </select>
    </button>
  </div>
  <DataAnalysis {query} />
</main>
