import type { RequestHandler } from "./$types";
import { getPublishedPosts } from "$lib/blog/util";

export const prerender = true;

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });

export const GET: RequestHandler = async ({ url }) => {
  const posts = await getPublishedPosts();
  posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  const origin = url.origin;

  const safeDate = (raw: string): string => {
    const d = new Date(raw);
    return Number.isNaN(d.getTime())
      ? new Date(0).toUTCString()
      : d.toUTCString();
  };

  const items = posts
    .map((p) => {
      const link = `${origin}/blog/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <description>${escapeXml(p.description)}</description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${safeDate(p.date)}</pubDate>
      <author>${escapeXml(p.author)}</author>
    </item>`;
    })
    .join("\n");

  const lastBuild = posts[0]
    ? safeDate(posts[0].date)
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>baseball.computer blog</title>
    <link>${origin}/blog</link>
    <description>baseball.computer blog</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
