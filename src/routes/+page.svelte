<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte";
  import { db } from "$lib/stores";
  import { onMount } from "svelte";

  // Warm up db connection
  onMount(async () => {
    db.subscribe(() => {});
  });
</script>

<PageHead title="Home" description="" />

<div
  class="flex items-center justify-center text-center xl:justify-start xl:pe-0 xl:ps-10 xl:text-start"
>
  <div class="flex flex-col items-center gap-6 xl:flex-row">
    <div class="h-1"></div>
    <h1 class="text-center text-8xl font-weiss">timeball</h1>
    <h2 class="font-title text-center text-3xl">
      A historical baseball database
    </h2>
    <div class="flex space-x-8">
      <a class="btn btn-primary flex-auto" href="/query-engine">Query Now</a>
    </div>
  </div>
</div>
