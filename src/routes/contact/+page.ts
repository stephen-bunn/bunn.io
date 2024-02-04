import { FULL_NAME } from "$lib/utils/constants"

export async function load() {
  return { metaTagsOverride: { title: `${FULL_NAME} - Contact` } }
}
