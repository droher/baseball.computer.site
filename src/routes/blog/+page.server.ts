import { getPublishedPosts } from "$lib/blog/util";

const MAX_POSTS = 10;

export const load = async () => {
  const allPosts = await getPublishedPosts();

  const posts = allPosts
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    .slice(0, MAX_POSTS);

  return { posts };
};

export const prerender = true;
