var siteInfo = require('./content/setup/info.json');
import data from './static/menu.json';
console.log(siteInfo)
var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json',
  '/category': 'categories/posts/*.json'
});


module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
  transition: { mode: "in-out" },
  head: {
    title: siteInfo.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteInfo.sitedescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://joshmotesbbq.com/images/uploads/icon.png' },
      { property: 'twitter:image', content: 'https://joshmotesbbq.com/images/uploads/icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@600;800;900' }
    ]
  },
  css: ["@/assets/grid.css", "bf-solid/dist/solid.latest.css"],
  // icon: {
  //   iconSrc: `${siteInfo.siteicon}`
  //  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/pwa', '@nuxtjs/axios', '@nuxtjs/eslint-module',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBKVrabadwbUtiUAxyyPhFR1ek4cBiWkVs",
          authDomain: "jm-bbq.firebaseapp.com",
          databaseURL: "https://jm-bbq.firebaseio.com",
          projectId: "jm-bbq",
          storageBucket: "jm-bbq.appspot.com",
          messagingSenderId: "214249158067",
          appId: "1:214249158067:web:db9151c8470fc12b1c47c6",
          measurementId: "G-8TMJ6289XP"
        },
        services: {
          firestore: true,
        },
      }]],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true


  },
  manifest: {
    name: siteInfo.sitename,
    short_name: siteInfo.sitename,
    description: siteInfo.sitedescription,
    lang: 'en'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: '/images/uploads/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'image-cache',
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400
          }
        }
      }
    ]
  },

  /*
  ** Route config for pre-rendering
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: ['title']
  },
  generate: {
    routes: dynamicRoutes
  },
  plugins: ['~/plugins/vuefuse', {
    src: "~/plugins/moment",
    ssr: false
  }, {
      src: "~/plugins/lazyload",
      ssr: false
    }],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */

  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
