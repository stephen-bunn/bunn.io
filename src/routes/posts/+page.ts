import type { MetaTagsProps } from 'svelte-meta-tags'
import type { LoadEvent } from '@sveltejs/kit'
import type { Post } from '$lib/types/Post'
import { parsePostJson } from '$lib/utils/post.js'

export const load = async ({
  fetch
}: LoadEvent): Promise<{ posts: Post[]; pageMetaTags: MetaTagsProps }> => {
  // The full list of posts must be fetched from the server at build time in order to generate the
  // appropriate static pages for each post.
  const posts: Post[] = (await (await fetch('/api/posts')).json()).map(parsePostJson)
  const pageMetaTags: MetaTagsProps = { title: 'Posts' }

  return { posts, pageMetaTags }
}
