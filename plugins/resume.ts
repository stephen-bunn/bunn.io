import { Plugin, Context } from '@nuxt/types'
import { JsonResume } from '~/types/JsonResume';

/**
 * Describes the available options through the `$resume` plugin.
 *
 * @interface ResumePlugin
 */
interface ResumePlugin {
  get(): Promise<JsonResume.Resume>
}

// Adapt the `@nuxt/types` typing to include typing specific to `$resume`
declare module '@nuxt/types' {
  interface Context {
    $resume: ResumePlugin
  }
}

/**
 * Custom error namespace for errors raised from the `$resume` plugin./
 *
 * @export
 * @class ResumePluginError
 * @extends {Error}
 */
export class ResumePluginError extends Error {
  constructor(public message: string) {
    super(message)
    this.name = 'ResumePluginError'
  }
}

/**
 * Install the `$resume` plugin.
 *
 * @param {Context} context The Nuxt context instance to mutate.
 * @returns {void}
 */
const resumePlugin: Plugin = (context: Context): void => {
  context.$resume = {
    /**
     * Fetch the full resume payload..
     *
     * @return {Promise<JsonResume.Resume>}
     */
    async get(): Promise<JsonResume.Resume> {
      const discovered = await context.$content('resume').fetch()
      if (!Array.isArray(discovered) || discovered.length === 0) {
        throw new ResumePluginError(
          `Invalid amount of resumes discovered, expected 1 found ${discovered.length}`
        )
      }
      return discovered[0] as unknown as JsonResume.Resume
    }
  }
}

export default resumePlugin
