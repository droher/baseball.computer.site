<script lang="ts">
  export let slug = "";
  export let title: string;

  const id = title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-");

  const href = slug ? `/blog/${slug}` : "#" + id;
</script>

{#if slug}
  <h3 class="text-xl font-semibold mt-4" {id}>
    <a {href} class="no-underline hover:underline">
      {title}
    </a>
  </h3>
{:else}
  <h2 class="text-2xl font-semibold mt-6" {id}>
    <a {href} class="no-underline hover:underline">
      {title}
    </a>
  </h2>
{/if}
