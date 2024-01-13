import type { Post } from "$lib/types/post"

import { error } from "@sveltejs/kit"
import { buildPost } from "$lib/api/plots/travel"

export async function load({
  params,
}): Promise<{ post: Post; Content: ConstructorOfATypedSvelteComponent }> {
  // We can't pull out this templated string into a shared variable due to a Vite limitation
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const data = await import(`../${params.slug}.svx`)
  const post = buildPost(`../${params.slug}.svx`, data)
  if (!post) error(404, "Not found")

  return {
    post,
    Content: data.default,
  }
}
