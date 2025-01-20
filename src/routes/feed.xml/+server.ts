import { buildFeed } from '$lib/utils/feed'
import { getPosts } from '$lib/utils/post'

export const prerender = true

export const GET = async () => {
  const posts = await getPosts({ limit: 10 })
  const feed = buildFeed({ posts })
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'max-age=0, s-max-age=600'
    }
  })
}
