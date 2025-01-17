export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const FIRST_NAME = 'Stephen'
export const LAST_NAME = 'Bunn'
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`
export const CONTACT_EMAIL = 'hey@bunn.io'

export const SITE_DOMAIN = IS_PRODUCTION ? 'https://bunn.io' : 'http://localhost:5173'
export const SITE_NAME = FULL_NAME
export const SITE_DESCRIPTION = 'Build as intuitively as possible.'
export const SITE_COPYRIGHT = `${new Date().getFullYear()} © ${FULL_NAME}`

export const SOCIALS = {
  github: {
    name: 'stephen-bunn',
    url: 'https://github.com/stephen-bunn'
  },
  linkedin: {
    name: 'stephen-bunn',
    url: 'https://linkedin.com/in/stephen-bunn'
  },
  mastodon: {
    name: '@st@social.lol',
    url: 'https://social.lol/@st'
  },
  omg: {
    name: '@st',
    url: 'https://st.omg.lol'
  },
  proven: {
    name: '@st',
    url: 'https://proven.lol/@st'
  },
  bluesky: {
    name: '@stephen-bunn.bsky.social',
    url: 'https://bsky.app/profile/stephen-bunn.bsky.social'
  },
  linktree: {
    name: 'stephen.bunn',
    url: 'https://linktr.ee/stephen.bunn'
  }
}
