import type { Post } from "$lib/types/post"
const SLUG_PATTERN = new RegExp(/^\/.*\/(.*)\.svx$/)

/**
 * Fetches all posts for the travel plot.
 */
export const fetchPosts = async (): Promise<(Post | null)[]> => {
  const allPosts = import.meta.glob("/src/routes/p/travel/*.svx")
  return (
    await Promise.all(
      Object.entries(allPosts).map(async ([filepath, resolver]) => {
        const slug = SLUG_PATTERN.exec(filepath)?.at(1)
        if (!slug) return null

        const { metadata } = (await resolver()) as Post
        if (!metadata?.published || !metadata?.title) return null

        return {
          slug,
          metadata,
        }
      })
    )
  ).filter(x => x)
}
