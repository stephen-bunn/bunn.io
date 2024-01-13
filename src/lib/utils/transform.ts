/**
 * Handle the resolving and transformation of dynamically imported files using a given transform.
 * This is primarily meant to be used alongside `import` or `import.meta.glob` from Vite.
 *
 * @param imported The imported files to apply the given transformation to.
 * @param transform A function to use for transforming dynamically imported files.
 * @returns The transformed dynamically imported files.
 */
export async function transformImportedFiles<T>(
  imported: Record<string, () => Promise<unknown>>,
  transform: (filepath: string, data: unknown) => T | null | undefined
): Promise<T[]> {
  return (
    await Promise.all(
      Object.entries(imported).map(
        async ([filepath, resolver]) => transform(filepath, await resolver()) as T
      )
    )
  ).filter(x => x)
}
