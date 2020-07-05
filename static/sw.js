importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.0b52683.js",
    "revision": "d5267dac793b4e87077d2bc304c14962"
  },
  {
    "url": "/_nuxt/app.c642393.css",
    "revision": "eea2c65e642802e58f023965c78ad5ea"
  },
  {
    "url": "/_nuxt/commons.app.1662953.js",
    "revision": "8f08ff9755669f17e4ef588931906028"
  },
  {
    "url": "/_nuxt/pages/about.f88662b.js",
    "revision": "b029adbd726a2ac220a3a1843f0dd9ee"
  },
  {
    "url": "/_nuxt/pages/blog/[_]slug.a8e9bb1.js",
    "revision": "bf77256e9f6d415132b144db20f31b3b"
  },
  {
    "url": "/_nuxt/pages/categories.2e33d7c.js",
    "revision": "aee1ec9a17a423761be78765a32456eb"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/[_]slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/[_]slug.b841961.js",
    "revision": "63d2d8260ce64cb3963b3b6bf02e55aa"
  },
  {
    "url": "/_nuxt/pages/community.9f59160.css",
    "revision": "cdf5b72ae07252b828c76c17b4b44ae2"
  },
  {
    "url": "/_nuxt/pages/community.e68fd2c.js",
    "revision": "448b64ba658054fce1077bbd5cd9be36"
  },
  {
    "url": "/_nuxt/pages/Contact.1c9e696.js",
    "revision": "f20fb8614dc493dae1baf1fd368f1523"
  },
  {
    "url": "/_nuxt/pages/Contact.719ac64.css",
    "revision": "dac6e40178e81d93f638a5a9f9551aae"
  },
  {
    "url": "/_nuxt/pages/index.37af49c.js",
    "revision": "bd250e4ff17934d8cbe827d3bee2b048"
  },
  {
    "url": "/_nuxt/pages/index.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/page/[_]slug.9ee457c.js",
    "revision": "dd8c50d2de34ed9eed4aeda1143b51fa"
  },
  {
    "url": "/_nuxt/runtime.42b4000.js",
    "revision": "d6ea43a2eee0a5ae412da247f7757b18"
  },
  {
    "url": "/_nuxt/vendors.app.446e707.js",
    "revision": "7875b53f86754e23ad06094163a42e0e"
  },
  {
    "url": "/_nuxt/vendors.app.673206f.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
