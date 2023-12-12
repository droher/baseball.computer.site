<script lang="ts">
  export let title: string;
  export let description: string;

  const siteTitle = "baseball.computer";
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  import logo from "$lib/assets/logo.png";
  import logoCard from "$lib/assets/logo-wide.png";
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="{logo}" />
  <meta property="og:url" content="https://baseball.computer" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="{logoCard}" />
</svelte:head>
