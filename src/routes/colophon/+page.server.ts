import type { MetaTagsProps } from 'svelte-meta-tags'
import { CI, GITHUB_RUN_ID, GITHUB_SERVER_URL, GITHUB_REPOSITORY } from '$env/static/private'

export const load = async () => {
  const pageMetaTags: MetaTagsProps = { title: 'Colophon' }
  return {
    pageMetaTags,
    ci: Boolean(CI || false),
    currentDate: new Date(),
    github:
      import.meta.env.MODE === 'production'
        ? {
            actionId: String(GITHUB_RUN_ID),
            actionUrl: `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`
          }
        : undefined
  }
}
