<script>
  import "../app.css";
  import "../global.css";
  import Navbar from "$lib/components/app/Nav.svelte";
  import Footer from "$lib/components/app/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  <slot />
</div>
<Footer />
