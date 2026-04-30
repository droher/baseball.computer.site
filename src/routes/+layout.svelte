<script lang="ts">
  import "../app.css";
  import "../global.css";
  import Navbar from "$lib/components/app/Nav.svelte";
  import Footer from "$lib/components/app/Footer.svelte";
  import { DbState, setDbState } from "$lib/state/db.svelte";
  import {
    PerspectiveState,
    setPerspectiveState,
  } from "$lib/state/perspective.svelte";

  setDbState(new DbState());
  setPerspectiveState(new PerspectiveState());

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="alternate"
    type="application/rss+xml"
    title="baseball.computer blog"
    href="/rss.xml"
  />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Navbar />
  {@render children?.()}
</div>
<Footer />
