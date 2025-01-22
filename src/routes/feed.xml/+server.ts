import type { Post } from '$lib/types/Post'
import { buildFeed } from '$lib/utils/feed'
import { parsePostJson } from '$lib/utils/post.js'

export const GET = async ({ fetch }) => {
  // The full list of posts must be fetched from the server at build time in order to generate the
  // appropriate static pages for each post.
  const posts: Post[] = (await (await fetch('/api/posts')).json()).map(parsePostJson)
  const feed = buildFeed({ posts })
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'max-age=0, s-max-age=600'
    }
  })
}
