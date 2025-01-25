import type { Post, PostContentImport } from '$lib/types/Post'
import { buildPost, parseSlug, sortPosts } from '$lib/utils/post'

/** Fetches posts from the server. */
export async function fetchPosts(options?: { limit?: number; offset?: number }): Promise<Post[]> {
  const { limit, offset = 0 } = options ?? {}
  const allPosts = (
    await Promise.all(
      Object.entries(import.meta.glob('/src/routes/posts/**/*.svx')).map(
        async ([filename, resolve]) => {
          const slug = parseSlug(filename)
          if (!slug) return

          const post = await buildPost({
            postContent: (await resolve()) as PostContentImport,
            slug
          })
          if (!post) return

          return post
        }
      )
    )
  )
    .filter((post) => !!post)
    .sort(sortPosts)

  return allPosts.slice(offset, limit ? offset + limit : allPosts.length)
}
