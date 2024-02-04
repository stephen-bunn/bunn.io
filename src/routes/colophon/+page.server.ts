const isProduction = import.meta.env.MODE === "production"
import { CI, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } from "$env/static/private"
import { FULL_NAME } from "$lib/utils/constants"

export const load = async () => {
  return {
    ci: Boolean(CI || false),
    currentDate: new Date(),
    github: isProduction
      ? {
          actionId: String(GITHUB_RUN_ID),
          actionUrl: `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`,
        }
      : null,
    metaTagsOverride: {
      title: `${FULL_NAME} - Colophon`,
    },
  }
}
