import { fetchPosts } from "$lib/api/plots/travel"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  return json(await fetchPosts())
}
