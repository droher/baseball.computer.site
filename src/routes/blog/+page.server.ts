import { getPublishedPosts } from "$lib/blog/util";

const MAX_POSTS = 10;

export const load = async ({ url }) => {
  let posts = await getPublishedPosts();

  posts
    .slice(0, MAX_POSTS)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return { posts: posts };
};

export const prerender = true;
