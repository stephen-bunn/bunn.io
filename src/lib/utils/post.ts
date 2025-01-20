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
