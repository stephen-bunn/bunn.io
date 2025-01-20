import { error } from '@sveltejs/kit'
import type { PostContentImport, PostPageLoad } from '$lib/types/Post'
import { buildPost, buildPostPageLoad } from '$lib/utils/post'

export const load = async ({ params }): Promise<PostPageLoad> => {
  const filepath = `./${params?.slug}.svx`

  // We need to handle the dynamic import within this load function as it can be unstable if done outside
  let postContent: PostContentImport
  try {
    postContent = await import(/* @vite-ignore */ filepath)
  } catch (e) {
    console.error(`Failed to import post content from ${filepath}`, { error: e })
    return error(404, 'Not Found')
  }

  const post = await buildPost({ filepath, postContent })
  if (!post) return error(404, 'Not Found')

  return buildPostPageLoad({ post })
}
