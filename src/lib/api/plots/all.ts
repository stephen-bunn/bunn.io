import type { Post } from "$lib/types/post"
import { buildPost } from "$lib/utils/post"
import { transformImportedFiles } from "$lib/utils/transform"

/** Fetches all posts for all plots. */
export default async function fetchPosts(): Promise<Post[]> {
  return (
    await transformImportedFiles<Post>(import.meta.glob("/src/routes/p/**/*.svx"), buildPost)
  ).sort((a, b) => a.published.getTime() - b.published.getTime())
}
