import type { Post, PostMetadata, PostPlot } from "$lib/types/post"
import type { MetaTagsProps } from "svelte-meta-tags"
import { FULL_NAME, SITE_DOMAIN } from "$lib/utils/constants"
import { sanitizeHtml } from "$lib/utils/sanitize"
import { error } from "@sveltejs/kit"

/** Describes the posts completeness. */
export enum PostStage {
  /** Very rough work, to be refined later. */
  SEEDLING,
  /** Cleaned up work, will be finalized later. */
  BUDDING,
  /** Finalized work, unlikely to change. */
  EVERGREEN,
}

/** The supported post plot names. */
export type PostPlotName = "travel" | "musing"

/**
 * Get the appropriate `PostStage` enum from a given string.
 *
 * @param postStage The string stage to get as a `PostStage` enum.
 * @returns The determined `PostStage` enum
 */
export const getPostStage = (postStage?: string): PostStage => {
  if (!postStage) return PostStage.SEEDLING

  switch (postStage.toLowerCase()) {
    case "budding":
      return PostStage.BUDDING
    case "evergreen":
      return PostStage.EVERGREEN
    default:
      return PostStage.SEEDLING
  }
}

/**
 * Get the plot structure for a post given a plot's name.
 *
 * @param plotName The name of the plot to get
 * @returns The plot data required for a given plot
 */
export const getPostPlot = (plotName: PostPlotName): PostPlot => {
  switch (plotName.toLowerCase()) {
    case "travel":
      return {
        name: "Travel",
        href: "/p/travel",
      }
    case "musing":
      return {
        name: "Musing",
        href: "/p/musing",
      }
    default:
      error(500, `Unhandled plot ${plotName}`)
  }
}

/**
 * Build the expected post interface for the given post data.
 *
 * @param filepath The filepath of the imported post.
 * @param data The data of the imported post.
 * @returns The constructed post interface if it is possible to construct, otherwise undefined.
 */
export const buildPost = (filepath: string, data: unknown, plot?: PostPlot): Post | undefined => {
  const slug = /^\/?.*\/(.*)\.svx$/.exec(filepath)?.at(1)
  if (!slug) return

  const { metadata } = data as { metadata: PostMetadata }
  if (!metadata?.published || !metadata?.title) return

  if (!plot) {
    // DANGER: This is not reliable if using relative paths (see `src/routes/p/travel/[slug]/+page.ts`)
    const plotName = filepath.split("/").at(-2)
    if (!plotName) error(500, `Failed to evaluate plot for ${filepath}`)
    // @ts-expect-error We cannot guarantee in this context that the filepath will be a valid post plot name
    plot = getPostPlot(plotName)
  }

  return {
    plot,
    title: metadata.title,
    published: new Date(metadata.published),
    updated: new Date(metadata.updated || metadata.published),
    tags: metadata.tags || [],
    href: `${plot.href}/${slug}`,
    metadata,
    // @ts-expect-error `data` is not going to be implicitly known by TS at this point
    content: data.default?.render ? sanitizeHtml(data.default.render().html) : undefined,
  }
}

/**
 * Builds the data structure for loading a post.
 *
 * @param post The post object.
 * @param data The data object containing the default component constructor.
 * @returns A n object containing the post, meta tags override, and the content constructor.
 */
export function buildPostLoad(
  post: Post,
  data: { default: ConstructorOfATypedSvelteComponent }
): {
  post: Post
  metaTagsOverride: MetaTagsProps
  Content: ConstructorOfATypedSvelteComponent
} {
  const canonical = `${SITE_DOMAIN}${post.href}`
  const metaTagsOverride: MetaTagsProps = Object.freeze({
    title: post.title,
    description: post.metadata?.description,
    canonical,
    openGraph: {
      type: "article",
      siteName: FULL_NAME,
      url: canonical,
      title: post.title,
      description: post.metadata?.description,
      images: post.metadata?.imageUrl
        ? [{ url: post.metadata.imageUrl, alt: post.metadata?.imageAlt }]
        : [],
      article: {
        publishedTime: post.published.toISOString(),
        modifiedTime: post.updated.toISOString(),
        authors: [FULL_NAME],
        tags: post.metadata?.tags,
      },
    },
  })

  return {
    post,
    metaTagsOverride,
    Content: data.default,
  }
}
