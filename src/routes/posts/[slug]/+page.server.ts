import { parseSlug } from '$lib/utils/post'
import type { EntryGenerator } from './$types'

export const prerender = 'auto'

/**
 * Entry generator for the posts route.
 *
 * We must iterate over all the files in the posts directory and extract the slug from the filename
 * in order for SvelteKit to understand what pages to statically generate since we are using dynamic
 * routing using slugs for posts.
 */
export const entries: EntryGenerator = async (): Promise<{ slug: string }[]> => {
  const paths: { slug: string }[] = []

  for (const filename in import.meta.glob('/src/routes/posts/**/*.svx')) {
    const slug = parseSlug(filename)
    if (slug) paths.push({ slug })
  }

  return paths
}
