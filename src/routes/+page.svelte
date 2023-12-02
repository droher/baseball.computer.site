<script lang="ts">
  import PageHead from "$lib/components/PageHead.svelte";
  import { db } from "$lib/stores";
  import { onMount } from "svelte";

  // Warm up db connection
  onMount(async () => {
    db.subscribe(() => {});
  });
</script>

<PageHead
  title="Home"
  description="Homepage for Timeball: An open historical baseball database."
/>
<div class="grow bg-gradient-to-b from-base-100 to-base-300">
  <div class="hero flex flex-col items-center gap-6 xl:flex-row">
    <h1 class="hero-content text-center text-4xl md:text-8xl font-weiss">
      Timeball
    </h1>
    <h2 class="hero-content font-title text-center text-2xl md:text-4xl">
      An open historical baseball database
      <br />
      That you can query from anywhere:
    </h2>
  </div>
  <div class="hero-content flex space-x-8">
    <a class="btn btn-primary flex-auto max-w-md" href="/query-engine"
      >Query Now</a
    >
  </div>
</div>
