import { FULL_NAME } from '$lib/constants'
import type { MetaTagsProps } from 'svelte-meta-tags'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: `${FULL_NAME} - Contact`
  }) satisfies MetaTagsProps

  return { pageMetaTags }
}
