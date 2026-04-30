<script lang="ts">
  let { description, slug = "" }: { description: string; slug?: string } =
    $props();

  const href = $derived(slug && `/blog/${slug}`);
</script>

<div class="mb-8">
  <p class="text-gray-700 text-base">
    {description}
  </p>

  {#if slug}
    <a {href} class="text-blue-600 hover:text-blue-800 hover:underline"
      >Read More →</a
    >
  {/if}
</div>
