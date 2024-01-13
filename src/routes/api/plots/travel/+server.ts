import { json } from "@sveltejs/kit"
import fetchPosts from "$lib/api/plots/travel"

export const GET = async () => json(await fetchPosts())
