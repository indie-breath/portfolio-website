// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/content", "@nuxt/image"],
  vite: {
    build: {
      cssCodeSplit: true,
    },
    base: "https://indie-breath.github.io/portfolio-website/",
  },
})
