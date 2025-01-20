import type { MetaTagsProps } from 'svelte-meta-tags'
import { buildPost } from '$lib/utils/post'

export const load = async () => {
  const pageMetaTags: MetaTagsProps = { title: 'Posts' }

  const filepaths = import.meta.glob('./[slug]/*.svx')
  const posts = []

  for (const filepath in filepaths) {
    try {
      const postContent = await import(/* @vite-ignore */ filepath)
      const post = await buildPost({ filepath, postContent })
      if (!post) continue

      posts.push(post)
    } catch (e) {
      console.error(`Failed to import post content from ${filepath}`, { error: e })
      continue
    }
  }

  posts.sort((a, b) => {
    if (!a.published && !b.published) return 0
    if (!a.published) return 1
    if (!b.published) return -1
    return new Date(b.published).getTime() - new Date(a.published).getTime()
  })
  return { posts, pageMetaTags }
}
