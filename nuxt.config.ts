// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/content", "@nuxt/image", "nuxt-vercel-analytics"],
  vite: {
    build: {
      cssCodeSplit: true,
    },
    base: "/portfolio-website/",
  },
})