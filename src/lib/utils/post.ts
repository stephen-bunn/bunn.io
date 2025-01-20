import type { MetaTagsProps } from 'svelte-meta-tags'

import { FULL_NAME, SITE_DOMAIN } from '$lib/constants'
import type { Post, PostContentImport, PostPageLoad } from '$lib/types/Post'

export async function buildPost(options: {
  filepath: string
  postContent: PostContentImport
}): Promise<Post | undefined> {
  const { filepath, postContent } = options
  const { metadata } = postContent

  // Skip unpublished and untitled posts
  if (!metadata || !metadata?.published || !metadata?.title) {
    console.warn(`Skipping post with missing title or published date at ${filepath}`)
    return
  }

  const slug = /^\/?.*\/(.*)\.svx$/.exec(filepath)?.at(1)
  if (!slug) return

  return {
    title: metadata.title,
    tags: metadata.tags ?? [],
    href: `/posts/${slug}`,
    published: new Date(metadata.published),
    updated: new Date(metadata.updated ?? metadata.published),
    metadata,
    component: postContent.default
  }
}

export function buildPostPageLoad(options: { post: Post }): PostPageLoad {
  const { post } = options

  const canonical = `${SITE_DOMAIN}${post.href}`
  const pageMetaTags: MetaTagsProps = {
    title: post.title,
    description: post.metadata?.description,
    canonical,
    openGraph: {
      type: 'article',
      siteName: FULL_NAME,
      url: canonical,
      title: post.title,
      description: post.metadata?.description,
      images: post.metadata?.imageSrc
        ? [{ url: post.metadata.imageSrc, alt: post.metadata?.imageAlt }]
        : [],
      article: {
        authors: [FULL_NAME],
        tags: post.metadata?.tags,
        ...(post.metadata?.published && { publishedTime: post.metadata.published }),
        ...(post.metadata?.updated && { modifiedTime: post.metadata.updated })
      }
    }
  }

  return {
    post,
    pageMetaTags,
    postComponent: post.component
  }
}

export function sortPosts(a: Post, b: Post): number {
  if (!a.published && !b.published) return 0
  if (!a.published) return 1
  if (!b.published) return -1
  return new Date(b.published).getTime() - new Date(a.published).getTime()
}

export async function getPosts(options?: {
  limit?: number
  sort?: (a: Post, b: Post) => number
}): Promise<Post[]> {
  const { limit, sort } = options ?? {}
  // This is a dynamic import that will be resolved at build time, so it needs to be included as a
  // literal string (not abstracted as a variable) and must be relative to the location of the file
  // that imports it.
  const filepaths = import.meta.glob('../../routes/posts/[slug]/*.svx')
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

  posts.sort(sort ?? sortPosts)
  if (limit) return posts.slice(0, limit)

  return posts
}
