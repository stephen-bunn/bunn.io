import type { Post } from "$lib/types/post"
import { FULL_NAME } from "$lib/utils/constants"

export const load = async ({ fetch }) => {
  return {
    posts: (await (await fetch("/api/plots/travel")).json()) as Post[],
    metaTagsOverride: {
      title: `${FULL_NAME} - Travel`,
    },
  }
}
