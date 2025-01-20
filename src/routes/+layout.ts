import { FIRST_NAME, FULL_NAME, LAST_NAME, SITE_DESCRIPTION, SITE_NAME } from '$lib/constants'
import type { MetaTagsProps } from 'svelte-meta-tags'

export const prerender = true
export const trailingSlash = 'always'

export const load = ({ url }) => {
  const baseMetaTags: MetaTagsProps = {
    title: FULL_NAME,
    titleTemplate: `${FULL_NAME} - %s`,
    description: SITE_DESCRIPTION,
    canonical: new URL(url.pathname, url.origin).href,
    keywords: [],
    openGraph: {
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
      locale: 'en_US',
      title: FULL_NAME,
      siteName: SITE_NAME,
      description: SITE_DESCRIPTION,
      profile: {
        firstName: FIRST_NAME,
        lastName: LAST_NAME
      }
    },
    additionalMetaTags: [{ property: 'proven.lol', content: 'proven3f2375' }]
  }
  return { baseMetaTags }
}
