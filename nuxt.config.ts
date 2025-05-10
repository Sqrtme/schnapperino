// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  site: { 
    url: 'https://schnapperino.com', 
    name: 'Schnapperino',
  },
  css: ['~/assets/css/main.css'],
})