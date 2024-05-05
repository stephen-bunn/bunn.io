import type { Post } from "$lib/types/post"
import { transformImportedFiles } from "$lib/utils/transform"
import { buildPost } from "$lib/utils/post"

/** Fetches all posts for the travel plot. */
export default async function fetchPosts(): Promise<Post[]> {
  return (
    await transformImportedFiles<Post>(import.meta.glob("/src/routes/p/travel/*.svx"), buildPost)
  ).sort((a, b) => b.published.getTime() - a.published.getTime())
}
