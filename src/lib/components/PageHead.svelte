<script lang="ts">
  import logo from "$lib/assets/logo.png";

  let { title, description }: { title: string; description: string } = $props();

  const siteTitle = "baseball.computer";
  let formattedTitle = $derived(title ? `${title} | ${siteTitle}` : siteTitle);
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={logo} />
  <meta property="og:url" content="https://baseball.computer" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={logo} />
</svelte:head>
