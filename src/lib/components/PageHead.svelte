<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import { page } from "$app/state";

  let { title, description }: { title: string; description: string } = $props();

  const siteTitle = "baseball.computer";
  const SITE_ORIGIN = "https://baseball.computer";
  let formattedTitle = $derived(title ? `${title} | ${siteTitle}` : siteTitle);
  let origin = $derived(page.url?.origin ?? SITE_ORIGIN);
  let absoluteLogo = $derived(`${origin}${logo}`);
  let absoluteUrl = $derived(`${origin}${page.url?.pathname ?? "/"}`);
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={absoluteLogo} />
  <meta property="og:url" content={absoluteUrl} />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absoluteLogo} />
</svelte:head>
