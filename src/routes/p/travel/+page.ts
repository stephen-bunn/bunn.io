export const load = async ({ fetch }) => {
  return { posts: await (await fetch("/api/plots/travel")).json() }
}
