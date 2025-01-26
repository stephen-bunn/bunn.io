import type { MetaTagsProps } from 'svelte-meta-tags'

import { FULL_NAME, SITE_DOMAIN } from '$lib/constants'
import type { Post, PostContentImport, PostJson, PostPageLoad } from '$lib/types/Post'
import type { Component } from 'svelte'

/** Parses the appropriate slug from a given filename. */
export function parseSlug(filename: string): string | undefined {
  return filename.match(/\/([^/]+)\.svx$/)?.[1]
}

/** Parses a JSON representation of a post. */
export function parsePostJson(postJson: PostJson): Post {
  return {
    ...postJson,
    published: postJson.published ? new Date(postJson.published) : undefined,
    updated: postJson.updated ? new Date(postJson.updated) : undefined
  }
}

/** Builds a post from its imported content. */
export async function buildPost(options: {
  postContent: PostContentImport
  slug: string
}): Promise<Post | undefined> {
  const { postContent, slug } = options
  const { metadata } = postContent

  // Skip unpublished and untitled posts
  if (!metadata || !metadata?.published || !metadata?.title) {
    console.warn(`Skipping post with missing title or published date with slug ${slug}`)
    return
  }

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

/** Builds a post page load object. */
export function buildPostPageLoad(options: { post: Post; postComponent: Component }): PostPageLoad {
  const { post, postComponent } = options

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
    postComponent
  }
}

/** Sorts posts by their published date. */
export function sortPosts(a?: Post, b?: Post): number {
  if (!a || !b) return !a ? 1 : -1
  if (!a.published || !b.published) return !a.published ? 1 : -1
  return new Date(b.published).getTime() - new Date(a.published).getTime()
}
