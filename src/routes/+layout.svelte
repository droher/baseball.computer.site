<script lang="ts">
  import "../app.css";
  import "../global.css";
  import Navbar from "$lib/components/app/Nav.svelte";
  import Footer from "$lib/components/app/Footer.svelte";

  let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  {@render children?.()}
</div>
<Footer />
