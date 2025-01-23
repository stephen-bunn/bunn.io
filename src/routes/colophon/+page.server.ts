import type { MetaTagsProps } from 'svelte-meta-tags'
import { env } from '$env/dynamic/private'

export const load = async () => {
  const pageMetaTags: MetaTagsProps = { title: 'Colophon' }
  return {
    pageMetaTags,
    ci: Boolean(env.CI || false),
    currentDate: new Date(),
    github:
      import.meta.env.MODE === 'production'
        ? {
            actionId: String(env.GITHUB_RUN_ID),
            actionUrl: `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}`
          }
        : undefined
  }
}
