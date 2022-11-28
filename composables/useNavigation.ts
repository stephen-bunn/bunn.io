/**
 * Describes a navigation item used for top-level site navigation.
 */
interface NavigationItem {
  /**
   * The display text used to represent the navigation item.
   */
  text: string

  /**
   * The partial or absolute URL that the navigation item directs to.
   */
  to: string

  /**
   * Optional element attributes to apply to the navigation item's link.
   */
  attributes?: Record<string, string>

  /**
   * The name of the Feather icon to display to the left of the navigation item's display text.
   */
  icon?: string

  /**
   * The source URL of the image to display to the left of the navigation item's display text.
   *
   * - **Please refrain from using both `icon` and `iconSrc` at the same time.**
   * - Please be sure to also populate the navigation item's `iconAlt` attribute if you use this.
   */
  iconSrc?: string

  /**
   * The alt text for the source URL provided in the `iconSrc` attribute.
   */
  iconAlt?: string
}

/**
 * Internal navigation items.
 * Should be constrained to only available partial routes for the current site.
 */
const internal: NavigationItem[] = [
  {
    text: 'About',
    to: '/',
  },
  {
    text: 'Posts',
    to: '/posts',
  },
  {
    text: 'Resume',
    to: '/resume',
  },
]

/**
 * Social navigation items.
 * All of these should describe links to external social media sites.
 */
const social: NavigationItem[] = [
  {
    text: 'GitHub',
    to: 'https://github.com/stephen-bunn',
    iconSrc: '/icons/github.svg',
    iconAlt: 'GitHub',
    attributes: {
      target: '_blank',
    },
  },
  {
    text: 'Linkedin',
    to: 'https://www.linkedin.com/in/stephen-bunn',
    iconSrc: '/icons/linkedin.svg',
    iconAlt: 'LinkedIn',
    attributes: {
      target: '_blank',
    },
  },
  {
    text: 'Mastodon',
    to: 'https://fosstodon.org/@stephenbunn',
    iconSrc: '/icons/mastodon.svg',
    iconAlt: 'Mastodon',
    attributes: {
      target: '_blank',
      rel: 'me',
    },
  },
]

/**
 * Composable used to represent top-level site navigation.
 */
export const useNavigation = () => {
  return useState('navigation', () => ({ internal, social }))
}
