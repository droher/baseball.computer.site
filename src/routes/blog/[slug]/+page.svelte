<script lang="ts">
  import type { PageData } from "./$types";
  import type { SvelteComponent } from "svelte";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/blog/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/blog/ArticleMeta.svelte";

  export const prerender = true;

  export let data: PageData;

  type C = $$Generic<typeof SvelteComponent<any, any, any>>;
  $: component = data.component as unknown as C;
</script>

<PageHead
  title={data.frontmatter.title}
  description={data.frontmatter.description}
/>
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<div class="prose">
  <svelte:component this={component} />
</div>
