import { FULL_NAME } from "$lib/utils/constants"

export const load = async () => {
  return {
    metaTagsOverride: {
      title: `${FULL_NAME} - Resume`,
    },
  }
}
