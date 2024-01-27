import sanitize from "sanitize-html"

/**
 * Sanitize some raw HTML accourding to our requirements.
 *
 * @param dirtyHtml The raw HTML that we want to sanitize.
 * @returns Sanitized HTML.
 */
export const sanitizeHtml = (dirtyHtml: string): string => {
  return sanitize(dirtyHtml, {
    allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
  })
}
