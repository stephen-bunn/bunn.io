import { error } from "@sveltejs/kit"
import type { MetaTagsProps } from "svelte-meta-tags"
import type { Post } from "$lib/types/post"
import { buildPost, buildPostLoad, getPostPlot } from "$lib/utils/post"

export async function load({ params }): Promise<{
  post: Post
  metaTagsOverride: MetaTagsProps
  Content: ConstructorOfATypedSvelteComponent
}> {
  // We can't pull out this templated string into a shared variable due to a Vite limitation
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const data = await import(`../${params.slug}.svx`)
  const post = buildPost(`../${params.slug}.svx`, data, getPostPlot("musing"))
  if (!post) error(404, "Not found")

  return buildPostLoad(post, data)
}
