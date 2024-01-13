import { NODE_ENV } from "$env/static/private"
// @ts-expect-error CI and GITHUB prefixed environment variables are only provided Github Action runs
import { CI, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } from "$env/static/private"

export const load = async () => {
  const isProduction = NODE_ENV === "production"
  return {
    isProduction,
    ci: Boolean(CI || false),
    githubActionId: String(GITHUB_RUN_ID) || undefined,
    githubActionHref: GITHUB_SERVER_URL
      ? `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`
      : undefined,
  }
}
