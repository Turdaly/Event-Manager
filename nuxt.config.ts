// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    '@samk-dev/nuxt-vcalendar'
  ],
  nitro: {
    compressPublicAssets: true,
  },
  experimental: { viewTransition: true },
  imports: {
    dirs: [
      'stores',
    ],
  },
})
