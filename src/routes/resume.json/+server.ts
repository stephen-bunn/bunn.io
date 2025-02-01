import resume from '$lib/data/resume.json'
import { json } from '@sveltejs/kit'

export const prerender = true
export const GET = () => json(resume)
