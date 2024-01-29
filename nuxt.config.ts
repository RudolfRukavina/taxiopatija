// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["~/plugins/preline.client.ts"],
    modules: [
    '@nuxtjs/tailwindcss',
      'nuxt-swiper'
  ],

    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
})
