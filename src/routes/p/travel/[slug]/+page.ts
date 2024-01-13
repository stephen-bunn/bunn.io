import { error } from "@sveltejs/kit"

export async function load({ params }) {
  const post = await import(`../${params.slug}.svx`)
  if (!post.metadata?.published) error(404, "Not found")

  return {
    metadata: post.metadata,
    Content: post.default,
  }
}
