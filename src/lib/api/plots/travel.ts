import type { Post, PostMetadata } from "$lib/types/post"
import { transformImportedFiles } from "$lib/utils/transform"

/**
 * Build the expected post interface for the given post data.
 *
 * @param filepath The filepath of the imported post.
 * @param data The data of the imported post.
 * @returns The constructed post interface if it is possible to construct, otherwise undefined.
 */
export function buildPost(filepath: string, data: unknown): Post | undefined {
  const slug = /^\/?.*\/(.*)\.svx$/.exec(filepath)?.at(1)
  if (!slug) return

  const { metadata } = data as { metadata: PostMetadata }
  if (!metadata?.published || !metadata?.title) return

  return {
    plot: {
      name: "Travel",
      href: "/p/travel",
    },
    title: metadata.title,
    published: new Date(metadata.published),
    href: `/p/travel/${slug}`,
    metadata,
  }
}

/** Fetches all posts for the travel plot. */
export default async function fetchPosts(): Promise<Post[]> {
  return await transformImportedFiles<Post>(
    import.meta.glob("/src/routes/p/travel/*.svx"),
    buildPost
  )
}
