import type { MetaTagsProps } from 'svelte-meta-tags'
import { getPosts } from '$lib/utils/post'

export const load = async () => {
  const pageMetaTags: MetaTagsProps = { title: 'Posts' }

  const posts = await getPosts()
  return { posts, pageMetaTags }
}
