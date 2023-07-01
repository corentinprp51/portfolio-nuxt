// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    email: '',
    password: ''
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  css: ['animate.css'],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
