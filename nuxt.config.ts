// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from "nuxt/schema";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      imageURL: process.env.IMAGE_URL,
      fakeToken: process.env.NUXT_FAKETOKEN,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "nuxt-vue3-google-signin",
  ],
  plugins: ["~/plugins/axios.ts"],
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
  hooks: {
    "pages:extend"(pages) {
      function setMiddleware(pages: NuxtPage[]) {
        for (const page of pages) {
          page.meta ||= {};
          page.meta.middleware = ["auth"];

          if (page.children) {
            setMiddleware(page.children);
          }
        }
      }
      setMiddleware(pages);
    },
  },
});
