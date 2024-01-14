import { NODE_ENV } from "$env/static/private"
// @ts-expect-error CI and GITHUB prefixed environment variables are only provided Github Action runs
import { CI, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } from "$env/static/private"

export const load = async () => ({
  isProduction: NODE_ENV === "production",
  ci: Boolean(CI || false),
  currentDate: new Date(),
  github: GITHUB_SERVER_URL
    ? {
        actionId: String(GITHUB_RUN_ID),
        actionUrl: `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`,
      }
    : null,
})
