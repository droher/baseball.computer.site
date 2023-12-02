<script lang="ts">
  import { page } from "$app/stores";

  import QueryInput from "$lib/components/data/QueryInput.svelte";
  import DataAnalysis from "$lib/components/data/DataAnalysis.svelte";
  import { QueryStatus, queryStatus } from "$lib/stores";
  import Rube from "$lib/components/data/Rube.svelte";
  import { goto } from "$app/navigation";

  const rubeStrings = ["rube", "waddell", "waddr101"];

  let query =
    atob(decodeURIComponent($page.url.searchParams.get("query") || "")) ||
    undefined;
  let text = query;

  let showRube = false;
  $: {
    showRube =
      rubeStrings.some((substring) =>
        query?.toLowerCase().includes(substring)
      ) && $queryStatus === QueryStatus.Running;
  }

  const handleQuery = () => {
    query = text;
    $queryStatus = QueryStatus.Ready;
    $page.url.searchParams.set(
      "query",
      encodeURIComponent(btoa(query?.trim() || ""))
    );
    goto($page.url.toString());
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
  {#if showRube}
    <Rube />
  {/if}
  <DataAnalysis {query} />
</main>
