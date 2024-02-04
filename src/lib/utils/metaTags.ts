import type { MetaTagsProps } from "svelte-meta-tags"
import omit from "$lib/utils/omit"
import {
  AVATAR_URL,
  FIRST_NAME,
  FULL_NAME,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
} from "$lib/utils/constants"

export const buildMetaTags = (
  route: { id: string | null },
  overrides: Partial<MetaTagsProps> = {}
): MetaTagsProps => {
  const canonical = `${SITE_DOMAIN}${route.id || ""}`
  return {
    title: FULL_NAME,
    description: SITE_DESCRIPTION,
    canonical,
    openGraph: {
      type: "website",
      url: canonical,
      images: [
        {
          url: AVATAR_URL,
          alt: `${FIRST_NAME}'s Portrait`,
          width: 512,
          height: 512,
        },
      ],
      ...(overrides.openGraph || {}),
    },
    ...omit(overrides, "openGraph"),
  }
}
