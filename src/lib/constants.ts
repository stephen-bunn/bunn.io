export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const FIRST_NAME = 'Stephen'
export const LAST_NAME = 'Bunn'
export const FULL_NAME = `${FIRST_NAME} ${LAST_NAME}`
export const CONTACT_EMAIL = 'hey@bunn.io'

export const SITE_DOMAIN = IS_PRODUCTION ? 'https://bunn.io' : 'http://localhost:5173'
export const SITE_NAME = FULL_NAME
export const SITE_DESCRIPTION = 'Build as intuitively as possible.'
export const SITE_COPYRIGHT = `${new Date().getFullYear()} © ${FULL_NAME}`
