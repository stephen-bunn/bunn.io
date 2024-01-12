export const load = async ({ fetch }) => {
  const response = await fetch(`/api/plots`)
  return { posts: await response.json() }
}
