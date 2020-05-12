export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'AT-LAB | i18n | Nuxt + Prismic ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AT-LAB, i18n exampel for Nuxt + Prismic ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/resetr.css',
    '@/assets/css/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/i18n.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
    ['nuxt-i18n', {
      lazy: true,
      locales: [
        
        {
          name: 'English',
          code: 'en',
          iso: 'en-us',
          file: 'en.json'
        },
        {
          name: 'French',
          code: 'fr',
          iso: 'fr-fr',
          file: 'fr.json'
        },
        {
          name: 'Swedish',
          code: 'sv',
          iso: 'sv-se',
          file: 'sv.json'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'en',
      parsePages: false, // Required
      pages: {}

      //
      // i18n -> TOUCHED FILES
      //
      // store/index.js
      // components/HeaderPrismic.js -> "MENU"
      // pages/*/*.vue -> "ASYNC GET CONTENT" 
      // plugins/i18n.js
      // lang/*.json

   }]
  ],

  prismic: {
    endpoint: 'https://at-lab-nuxt-prismic-i18n.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
