import { json, error } from "@sveltejs/kit"
import { buildFeed } from "$lib/utils/feed"
import fetchPosts from "$lib/api/plots/travel"

export const GET = async ({ params }) => {
  // Limiting feed to the latest 10 posts
  const feed = buildFeed((await fetchPosts()).slice(0, 10))
  switch (params.extension.toLowerCase().replace(/\/+$/, "")) {
    case "json":
      return json(JSON.parse(feed.json1()))
    case "rss":
      return new Response(feed.rss2())
    case "atom":
      return new Response(feed.atom1())
    default:
      return error(404, "Not found")
  }
}
