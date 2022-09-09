import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        download: true,
        families: {
          Rajdhani: [500, 700],
          'Source Sans': true,
          'Fira Code': true,
        },
      },
    ],
    ['@nuxtjs/tailwindcss', { exposeConfig: false, viewer: false }],
    '@nuxt/image-edge',
  ],
  css: ['~/assets/styles/scrollbar.css'],
})
