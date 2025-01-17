/** Truncate a string to a certain length. */
export function truncate(
  string: string,
  options?: { length?: number; omission?: string; separator?: string | RegExp }
): string {
  const { length = 30, omission = '…', separator } = options ?? {}

  if (string.length <= length) return string
  return (
    string.substring(0, separator ? string.substring(0, length).search(separator) : length) +
    omission
  )
}
