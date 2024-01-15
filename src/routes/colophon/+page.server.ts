const isProduction = import.meta.env.MODE === "production"
import { CI, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } from "$env/static/private"

export const load = async () => ({
  ci: Boolean(CI || false),
  currentDate: new Date(),
  github: isProduction
    ? {
        actionId: String(GITHUB_RUN_ID),
        actionUrl: `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`,
      }
    : null,
})
