import { json } from '@sveltejs/kit'
import { fetchPosts } from '$lib/api/posts'

/** Endpoint to fetch all posts from the server. */
export const GET = async () => json(await fetchPosts())
