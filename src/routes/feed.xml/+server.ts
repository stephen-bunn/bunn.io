import { buildFeed } from '$lib/utils/feed'
import { fetchPosts } from '$lib/api/posts'

export const prerender = true

export const GET = async () => {
  // The full list of posts must be fetched from the server at build time in order to generate the
  // appropriate static pages for each post.
  const posts = await fetchPosts()
  const feed = buildFeed({ posts })
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'max-age=0, s-max-age=600'
    }
  })
}
