<script>
  import "../app.postcss";
  import Navbar from "$lib/components/app/Nav.svelte";
  import Footer from "$lib/components/app/Footer.svelte";
</script>

<div class="flex flex-col">
	<Navbar />
	<slot />
</div>
<Footer />
