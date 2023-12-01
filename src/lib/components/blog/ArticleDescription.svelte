<script lang="ts">
  export let description: string;
  export let slug = "";

  const href = slug && `/blog/${slug}`;
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
