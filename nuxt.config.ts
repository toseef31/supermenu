// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@samk-dev/nuxt-vcalendar',
    '@nuxtjs/supabase'
  ],
  plugins: [
    '~/plugins/i18n.js'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'ar',
        file: 'ar-KSA.json',
        dir: 'rtl'
      },
      {
        code: 'en',
        file: 'en-US.json',
        dir: 'ltr'
      },
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      exclude: [],
    }
  }

})
