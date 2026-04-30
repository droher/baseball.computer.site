export const slugFromPath = (path: string) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const processModules = async (
  modules: Record<string, () => Promise<unknown>>
): Promise<App.BlogPost[]> => {
  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
        ({
          slug: slugFromPath(path),
          ...(post as App.MdsvexFile).metadata,
        }) as App.BlogPost
    )
  );

  const posts = await Promise.all(postPromises);
  return posts.filter((post) => post.published);
};

export const getPublishedPosts = async (): Promise<App.BlogPost[]> => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
  return processModules(modules as Record<string, () => Promise<unknown>>);
};
