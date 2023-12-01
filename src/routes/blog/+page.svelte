<script lang="ts">
  import type { PageData } from "./$types";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/blog/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/blog/ArticleMeta.svelte";
  import ArticleDescription from "$lib/components/blog/ArticleDescription.svelte";

  export let data: PageData;
</script>

<PageHead title="Blog" description="Timeball Blog" />

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-1">
  <div class="mt-6 grid gap-5 mx-auto grid-cols-1">
    {#each data.posts as { slug, title, author, description, date }}
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <article>
              <ArticleTitle {slug} {title} />
              <ArticleMeta {author} {date} />
              <ArticleDescription {description} {slug} />
            </article>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
