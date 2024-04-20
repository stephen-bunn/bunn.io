import { json } from "@sveltejs/kit"
import fetchPosts from "$lib/api/plots/musing"

export const GET = async () => json(await fetchPosts())
