importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.3cebbfe.js",
    "revision": "af38508114f3ed224e9bb2ad45f26cb8"
  },
  {
    "url": "/_nuxt/app.af29210.css",
    "revision": "28574daa76d9e4dfcee98ffb48952999"
  },
  {
    "url": "/_nuxt/commons/app.7b05d06.js",
    "revision": "3b991c74c9b248245b8e0a46763ba582"
  },
  {
    "url": "/_nuxt/pages/about.d4c4cb1.js",
    "revision": "d6b82583ea43e1ce32055eb66fc0be8c"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.870a295.js",
    "revision": "91cb4a5857b01f935c3e206160b8e70c"
  },
  {
    "url": "/_nuxt/pages/categories.40d2dde.js",
    "revision": "c6835e5b06c8ca5c0c9e837c409318f7"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.45d41ff.css",
    "revision": "9c068e2d756e4be6a99eb21f2e55c839"
  },
  {
    "url": "/_nuxt/pages/category/_slug.b8fe037.js",
    "revision": "457142fe1dcf69f34d395bea49e02810"
  },
  {
    "url": "/_nuxt/pages/community.9ccbc25.js",
    "revision": "8c9ea557e24047034d14616aac37796c"
  },
  {
    "url": "/_nuxt/pages/community.e6e5500.css",
    "revision": "997ba0213427ac04134a7ac9c6ee1924"
  },
  {
    "url": "/_nuxt/pages/contact.2c7c54f.js",
    "revision": "7eb3822522e6af710802dd64b49da802"
  },
  {
    "url": "/_nuxt/pages/contact.791f9bf.css",
    "revision": "c99e8844a0d12c7924888dc4f6f5de15"
  },
  {
    "url": "/_nuxt/pages/index.2a3bfce.css",
    "revision": "dceadcd869313de74d171b3d8c50fbed"
  },
  {
    "url": "/_nuxt/pages/index.3173917.js",
    "revision": "70b4a6ee4287b455a991e76a6499eadc"
  },
  {
    "url": "/_nuxt/runtime.fe9564a.js",
    "revision": "5e808df3e8ee336726ec4f830a02f012"
  },
  {
    "url": "/_nuxt/vendors~app.3cacae4.js",
    "revision": "adb96262ecc7d9709843253224c97b29"
  },
  {
    "url": "/_nuxt/vendors~app.673206f.css",
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

workbox.routing.registerRoute(new RegExp('/.netlify/functions/.*'), workbox.strategies.networkFirst({ "SameSite=None; Secure"}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({ "cacheName": "image-cache", "cacheExpiration": { "maxEntries": 100, "maxAgeSeconds": 86400 } }), 'GET')
