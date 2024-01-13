import type { Post } from "$lib/types/post"

export const load = async ({ fetch }) => {
  return { posts: (await (await fetch("/api/plots/travel")).json()) as Post[] }
}
