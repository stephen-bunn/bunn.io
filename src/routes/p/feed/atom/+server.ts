import { buildFeed } from "$lib/utils/feed"
import fetchPosts from "$lib/api/plots/travel"

export const prerender = true
export const GET = async () => {
  // Limiting feed to the latest 10 posts
  const feed = buildFeed((await fetchPosts()).slice(0, 10))
  return new Response(feed.atom1(), {
    headers: {
      "Cache-Control": "max-age=0, s-max-age=600",
      "Content-Type": "application/xml",
    },
  })
}
