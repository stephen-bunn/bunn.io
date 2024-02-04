import type { Post } from "$lib/types/post"
import type { MetaTagsProps } from "svelte-meta-tags"
import { error } from "@sveltejs/kit"
import { FULL_NAME, SITE_DOMAIN } from "$lib/utils/constants"
import { buildPost, getPostPlot } from "$lib/utils/post"

export async function load({ params }): Promise<{
  post: Post
  metaTagsOverride: MetaTagsProps
  Content: ConstructorOfATypedSvelteComponent
}> {
  // We can't pull out this templated string into a shared variable due to a Vite limitation
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const data = await import(`../${params.slug}.svx`)
  const post = buildPost(`../${params.slug}.svx`, data, getPostPlot("travel"))
  if (!post) error(404, "Not found")

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
