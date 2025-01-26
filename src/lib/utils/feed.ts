import { render } from 'svelte/server'
import { Feed, type FeedOptions } from 'feed'
import {
  CONTACT_EMAIL,
  FULL_NAME,
  REPOSITORY_URL,
  SITE_COPYRIGHT,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_NAME
} from '$lib/constants'
import type { Post } from '$lib/types/Post'

/** Builds an RSS feed from the given posts. */
export const buildFeed = async (options: {
  posts: ReadonlyArray<Post>
  feedOptions?: Partial<FeedOptions>
}): Promise<Feed> => {
  const { posts, feedOptions } = options
  const feed = new Feed({
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
    favicon: `${SITE_DOMAIN}/favicon.png`,
    language: 'en',
    id: SITE_NAME,
    link: SITE_DOMAIN,
    copyright: SITE_COPYRIGHT,
    generator: REPOSITORY_URL,
    author: {
      name: FULL_NAME,
      email: CONTACT_EMAIL,
      link: SITE_DOMAIN
    },
    feedLinks: {
      rss: `${SITE_DOMAIN}/feed.xml`,
      json: `${SITE_DOMAIN}/feed.json`,
      atom: `${SITE_DOMAIN}/feed.atom`
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
      content: post.component ? render(post.component).body : undefined,
      copyright: SITE_COPYRIGHT,
      image: post.metadata?.imageSrc && {
        url: post.metadata.imageSrc,
        title: post.metadata.imageAlt
      },
      author: [
        {
          name: FULL_NAME,
          email: CONTACT_EMAIL,
          link: SITE_DOMAIN
        }
      ]
    })
  })

  return feed
}
