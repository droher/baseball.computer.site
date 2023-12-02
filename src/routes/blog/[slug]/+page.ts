import type { EntryGenerator, PageLoad } from "./$types";
import { getPublishedPosts, slugFromPath } from "$lib/blog/util";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  let match: { path?: string; resolver?: App.MdsvexResolver } = {};
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = { path, resolver: resolver as unknown as App.MdsvexResolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  if (!post || !post.metadata.published) {
    throw error(404); // Couldn't resolve the post
  }

  return {
    component: post.default,
    frontmatter: post.metadata,
  };
};

export const entries: EntryGenerator = async () => {
  const posts = await getPublishedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};


export const prerender = true;
