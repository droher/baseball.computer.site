<script lang="ts">
  import { db } from "$lib/stores";

  export let title: string;
  export let description: string;

  const siteTitle = "baseball.computer";
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>
