import { slugFromPath } from "$lib/blog/slugFromPath";
import type { EntryGenerator } from "./[slug]/$types";

const MAX_POSTS = 10;

const getPublishedPosts = async (): Promise<App.BlogPost[]> => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
        ({
          slug: slugFromPath(path),
          ...(post as unknown as App.MdsvexFile).metadata,
        }) as App.BlogPost
    )
  );

  const posts = await Promise.all(postPromises);
  return posts.filter((post) => post.published);
};

export const load = async ({ url }) => {
  let posts = await getPublishedPosts();

  posts
    .slice(0, MAX_POSTS)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return { posts: posts };
};

export const entries: EntryGenerator = async () => {
  const posts = await getPublishedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const prerender = true;
