import { Feed, type FeedOptions } from "feed"
import type { Post } from "$lib/types/post"
import { SITE_DOMAIN, SITE_DESCRIPTION, FULL_NAME, SITE_COPYRIGHT } from "$lib/utils/constants"

/**
 * Create a new feed object to populate with posts.
 *
 * @param options Feed options for generating the feed object.
 * @returns A constructed feed object.
 */
const createFeed = (options?: Partial<FeedOptions>): Feed => {
  return new Feed({
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_DOMAIN,
    link: SITE_DOMAIN,
    copyright: SITE_COPYRIGHT,
    author: {
      name: FULL_NAME,
      email: SITE_DOMAIN,
      link: SITE_DOMAIN,
    },
    ...(options || {}),
  })
}

/**
 * Construct a feed of posts.
 *
 * @param posts The posts to include in the built feed.
 * @param options Any custom feed overrides for the generated feed.
 * @returns The constructed and populated post feed.
 */
export const buildFeed = (posts: Post[], options?: Partial<FeedOptions>): Feed => {
  const feed = createFeed(options)

  posts.map(async post => {
    const link = `${SITE_DOMAIN}${post.href}`
    feed.addItem({
      title: post.title,
      date: post.updated,
      description: post.metadata?.description,
      link,
      id: link,
      published: post.published,
      category: post.tags.map(tag => ({ name: tag })),
      content: post.content,
      copyright: SITE_COPYRIGHT,
      image: post.metadata?.imageUrl
        ? { url: post.metadata.imageUrl, title: post.metadata.imageAlt }
        : undefined,
    })
  })

  return feed
}
