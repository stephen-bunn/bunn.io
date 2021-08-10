export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    mode: 'hash',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stephen Bunn',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Adds $navigation plugin to pages
    '~/plugins/navigation',
    // Adds $resume plugin to pages
    '~/plugins/resume',
    // https://github.com/Akryum/v-tooltip
    '~/plugins/v-tooltip',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/ivodolenc/nuxt-animejs#readme
    'nuxt-animejs',
    // https://github.com/nuxtclub/feathericons
    '@nuxtclub/feathericons',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Google Fonts Configuration: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Rajdhani: [400, 700],
      Roboto: [400, 700],
      'Fira Code': [500, 700],
    },
  },
}
