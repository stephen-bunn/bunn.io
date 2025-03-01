import { error, type LoadEvent } from '@sveltejs/kit'
import type { PostContentImport, PostPageLoad } from '$lib/types/Post'
import { buildPostPageLoad, buildPost } from '$lib/utils/post'

export const load = async ({ params }: LoadEvent): Promise<PostPageLoad> => {
  if (!params.slug) throw error(404, 'Not Found')

  // We need to handle the relative dynamic import within this load function EXACTLY like this
  // Otherwise, Vite will not be able to resolve the import path correctly
  const postContent: PostContentImport = await import(`../${params.slug}.svx`)
  const post = await buildPost({ postContent, slug: params.slug })
  if (!post) return error(404, 'Not Found')

  return buildPostPageLoad({ post, postComponent: postContent.default })
}
