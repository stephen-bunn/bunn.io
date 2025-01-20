import { render } from 'svelte/server'
import { Feed, type FeedOptions } from 'feed'
import {
  CONTACT_EMAIL,
  FULL_NAME,
  SITE_COPYRIGHT,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_NAME
} from '$lib/constants'
import type { Post } from '$lib/types/Post'

export const buildFeed = (options: {
  posts: ReadonlyArray<Post>
  feedOptions?: Partial<FeedOptions>
}): Feed => {
  const { posts, feedOptions } = options
  const feed = new Feed({
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_NAME,
    link: SITE_DOMAIN,
    copyright: SITE_COPYRIGHT,
    author: {
      name: FULL_NAME,
      email: CONTACT_EMAIL,
      link: SITE_DOMAIN
    },
    ...(feedOptions ?? {})
  })

  posts.forEach(async (post) => {
    const link = `${SITE_DOMAIN}${post.href}`
    feed.addItem({
      title: post.title,
      date: post.updated ?? post.published ?? new Date(),
      description: post.metadata?.description,
      link,
      id: link,
      published: post.published,
      category: post.metadata?.tags?.map((tag) => ({ name: tag })) ?? [],
      content: render(post.component, {}).body,
      copyright: SITE_COPYRIGHT,
      image: post.metadata?.imageSrc && {
        url: post.metadata.imageSrc,
        title: post.metadata.imageAlt
      }
    })
  })

  return feed
}
