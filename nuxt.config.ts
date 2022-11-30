import { defineNuxtConfig } from 'nuxt'

/**
 * Describes environment-specific variables pulled from the running/building environment.
 */
const env = {
  /**
   * The GTM identifier to use when initializing the GTM script.
   */
  GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  app: {
    head: {
      script: [
        {
          hid: 'gtm',
          type: 'text/javascript',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${env.GOOGLE_TAG_MANAGER_ID}');`,
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-fonts',
      {
        download: true,
        families: {
          Rajdhani: [500, 700],
          'Fira Sans': [400, 700],
          'Fira Code': true,
        },
      },
    ],
    ['@nuxtjs/tailwindcss', { exposeConfig: false, viewer: false }],
    '@nuxt/image-edge',
    '@nuxt/content',
  ],
  css: ['~/assets/styles/scrollbar.scss'],
  // https://content.nuxtjs.org/api/configuration
  content: {
    base: 'content',
    highlight: {
      theme: 'dracula',
      preload: [
        'diff',
        'json',
        'js',
        'ts',
        'css',
        'shell',
        'html',
        'md',
        'yaml',
        'python',
      ],
    },
  },
})
