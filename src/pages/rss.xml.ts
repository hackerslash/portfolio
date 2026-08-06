import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getBlogs } from "@blogs"

export function GET(context: APIContext) {
  return rss({
    title: "Md Afridi Sk — Writing",
    description:
      "Technical writing by Md Afridi Sk on backend engineering, AI systems, observability and the web.",
    site: context.site!,
    items: getBlogs().map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.id}/`,
      categories: post.tags,
    })),
  })
}
