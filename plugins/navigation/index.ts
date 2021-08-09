import Vue from 'vue'
import { Navigation, NavigationItem } from '~/plugins/navigation/types';

const internalRoutes: NavigationItem[] = [
  {
    to: '/blog',
    disabled: true,
    icon: 'book-open',
    label: 'Blog'
  },
  {
    to: '/resume',
    icon: 'bookmark',
    label: 'Resume'
  }
]
const externalRoutes: NavigationItem[] = [
  {
    to: 'https://linkedin.com/in/stephen-bunn',
    icon: 'linkedin',
    target: '_blank'
  },
  {
    to: 'https://github.com/stephen-bunn',
    icon: 'github',
    target: '_blank'
  }
]


/**
 * Describes the available options through the `$navigation` plugin.
 *
 * @interface NavigationPlugin
 */
export interface NavigationPlugin {
  get(): Navigation,
  isActive(to: string, currentRoute: string): boolean
}

// Adapt the `@nuxt/types` typing to include typing specific to `$navigation`
declare module '@nuxt/types' {
  interface Context {
    $navigation: NavigationPlugin
  }
}

/**
 * Custom error namespace for errors raised from the `$navigation` plugin./
 *
 * @export
 * @class NavigationPluginError
 * @extends {Error}
 */
export class NavigationPluginError extends Error {
  constructor(public message: string) {
    super(message)
    this.name = 'NavigationPluginError'
  }
}

function getPathFragments(path: string): string[] {
  return path.split('/').filter(fragment => fragment.length > 0)
}

Vue.use({
  install: (Vue, _) => {
    Vue.prototype.$navigation = {
      get: () => {
        return {
          internal: internalRoutes.filter(item => !item?.disabled),
          external: externalRoutes.filter(item => !item?.disabled)
        }
      },
      isActive: (to: string, currentRoute: string): boolean => {
        return getPathFragments(to)[0] === getPathFragments(currentRoute)[0]
      }
    }
  }
})
