/**
 * Remove some keys from an object to construct and remove a new object.
 *
 * @param obj The object to strip some given keys from.
 * @param keys The keys to strip from the given object.
 * @returns A new object with the given keys removed.
 */
export default function omit(obj: object, ...keys: string[]): object {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)))
}
