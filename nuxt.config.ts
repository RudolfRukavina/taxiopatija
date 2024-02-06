// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
    head: {
      charset: 'utf-8',
     viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [{ rel: 'icon', type: 'image/x-con', href: './public/favicon.ico'}],
    },
  },
    robots: {
    mergeWithRobotsTxtPath: './public/_robots.txt'
  },
    ssr: false,
    modules: [
    '@nuxtjs/tailwindcss',
      'nuxt-swiper',
  ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
})
