import { buildFeed } from "$lib/utils/feed"
import fetchPosts from "$lib/api/plots/travel"

export const GET = async () => {
  // Limiting feed to the latest 10 posts
  const feed = buildFeed((await fetchPosts()).slice(0, 10))
  return new Response(feed.atom1())
}
