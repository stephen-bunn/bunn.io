export const fetchTravelPlotEntries = async () => {
  const allEntries = import.meta.glob("/src/routes/p/travel/*.md")
  return await Promise.all(
    Object.entries(allEntries).map(async ([path, resolver]) => {
      // @ts-expect-error Resolver will never be known
      const { metadata } = await resolver()
      return {
        metadata,
        path: path.slice(21, -3),
      }
    })
  )
}
