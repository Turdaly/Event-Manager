// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from "nuxt/schema";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-vue3-google-signin",
  ],
  googleSignIn: {
    clientId:
      "422548645038-2nsnktflcnpnd0hqc1m7uuipdjace8bg.apps.googleusercontent.com",
  },
  imports: {
    dirs: ["stores"],
  },
  nitro: {
    compressPublicAssets: true,
  },
  experimental: { viewTransition: true },
  
});
