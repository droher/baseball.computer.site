export const slugFromPath = (path: string) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const getPublishedPosts = async (): Promise<App.BlogPost[]> => {
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
