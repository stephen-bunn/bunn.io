export async function load({ params }) {
  const post = await import(`../${params.slug}.md`)

  return {
    Content: post.default,
  }
}
