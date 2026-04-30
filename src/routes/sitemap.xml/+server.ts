import type { RequestHandler } from "./$types";
import { getPublishedPosts } from "$lib/blog/util";

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
  const posts = await getPublishedPosts();
  const origin = url.origin;
  const paths = [
    "/",
    "/query-engine",
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
  ];

  const body = paths
    .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
