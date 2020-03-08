export default {
  mode: 'universal',
  srcDir: 'src/',

  // Access local server on other devices
  server: {
    host: '0.0.0.0'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Digital Designer and Front-end Developer',
    titleTemplate: 'Giliam Verheide - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Giliam Verheide is a Dutch Digital Designer and Front-end Developer'
      },
      //
      // To be added
      //
      // { hid: 'og-url', name: 'og:url', content: '' },
      // { hid: 'og-type', name: 'og:type', content: 'website' },
      // {
      //   hid: 'og-title',
      //   name: 'og:title',
      //   content: ''
      // },
      // { hid: 'og-description', name: 'og:description', content: '' },
      // {
      //   hid: 'og-image',
      //   name: 'og:image',
      //   content: ''
      // },
      {
        hid: 'msapplication-tilecolor',
        name: 'msapplication-TileColor',
        content: '#000000'
      },
      {
        hide: 'theme-color',
        name: 'theme-color',
        content: '#000000'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // {
    //   src: '~/plugins/SmoothScroll.js',
    //   mode: 'client'
    // },
    {
      src: '~/plugins/LazySizes.js',
      mode: 'client'
    },
    {
      src: '~/plugins/IntersectionObserver.js',
      mode: 'client'
    }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-PDBJRN3',
    dev: false
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@bazzite/nuxt-optimized-images'],

  router: {},

  /**
   * Share variables, mixins, functions across all style files
   * Important: Do not import actual styles, only variables, mixins, etc.
   */
  styleResources: {
    scss: ['~assets/scss/01_settings/_all.scss', '~assets/scss/02_tools/_all.scss']
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    defaultImageLoader: 'img-loader',
    inlineImageLimit: -1,
    mozjpeg: {
      quality: 90
    },
    optipng: false,
    pngquant: {
      speed: 5,
      quality: [0.75, 0.9]
    },
    webp: {
      quality: 95
    }
  },

  generate: {
    routes: [
      '/projects/ark-wallet-themes',
      '/projects/moviestream',
      '/projects/uefa-champions-league-second-screen-app'
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /**
     * You can extend webpack config here
     */

    // Uses webpack-bundle-analyzer
    analyze: false,

    loaders: {},

    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)|(\.svg$)/
        });
      }

      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      if (isClient) {
        vueLoader.options.transformAssetUrls.img = ['data-src', 'src'];
        vueLoader.options.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }

      /**
       * Use SVG files as Vue components
       */

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                // prettier-ignore
                plugins: [
                  { removeViewBox: false },
                  { removeDimensions: true },
                  { cleanupIDs: true },
                  { removeTitle: false }
                ]
              }
            }
          }
        ]
      });
    }
  }
};
