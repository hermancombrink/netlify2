import highlightjs from 'highlight.js'

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Xebra Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Xebra Tech',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }],
    scripts: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: 'bootstrap/dist/css/bootstrap.min.css', lang: 'css' },
    { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: '~assets/app/app.css', lang: 'css' },
    { src: 'animate.css/animate.min.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.carousel.css', lang: 'css' },
    { src: 'owl.carousel/dist/assets/owl.theme.default.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/sofbox.js', '~plugins/global.js'],

  // router: {
  //   base: '/sofbox-vue/'
  // },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/moment'
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/pwa'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: {
      allChunks: true
    },
    splitChunks: {
      layouts: true
    },
    vendor: ['jquery', 'bootstrap'],
    extend (config, ctx) {},
    babel: { compact: true }
  },
  server: {
    port: 5700, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  pwa: {
    workbox: {
      publicPath: '/_ico',
      enabled: true,
      cacheAssets: false
    }
  },
  moment: {},

  vue: {
    config: {
      ignoredElements: [
        'rs-module-wrap',
        'rs-module',
        'rs-bgvideo',
        'rs-slides',
        'rs-layer',
        'rs-static-layers',
        'rs-progress',
        'rs-slide',
        'rs-3'
      ]
    }
  }
}
