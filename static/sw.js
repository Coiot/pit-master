importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02b1f8bc8835f27191e2.js",
    "revision": "2127566bacb593b9241725d13f338236"
  },
  {
    "url": "/_nuxt/19d71f2e8b956cfda8bc.js",
    "revision": "2f91fa9532102cd5118a76fa333aea94"
  },
  {
    "url": "/_nuxt/32d23b90040a622907ff.js",
    "revision": "8a3702e5715c525ce81937bcd96a7752"
  },
  {
    "url": "/_nuxt/45d41ff95132cd150df1.css",
    "revision": "9c068e2d756e4be6a99eb21f2e55c839"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/4951e77ba687e2f97ac8.js",
    "revision": "267f5cc4383fef118665e5bd7310a956"
  },
  {
    "url": "/_nuxt/603340b10c5f25d73245.js",
    "revision": "0ecd45207580644c5cd7175b0dc4d452"
  },
  {
    "url": "/_nuxt/71dec9f007293bae06b8.js",
    "revision": "f227ee3e9827d3ce418c4ce413cdf4a8"
  },
  {
    "url": "/_nuxt/7d73046bdc036d2d797a.js",
    "revision": "af6c10c8176933fbc77585b096883b59"
  },
  {
    "url": "/_nuxt/8d0ee5857289dd0f9067.js",
    "revision": "bf303b5c0b55446a6530740d156fd58e"
  },
  {
    "url": "/_nuxt/9a5d16d67ea7e16e52f6.css",
    "revision": "7ea42342ed11edd24efc2ccc05f2c2f8"
  },
  {
    "url": "/_nuxt/a6187b7943c7af598937.css",
    "revision": "1a0e1fa99a64ec4594a721a15b1709f7"
  },
  {
    "url": "/_nuxt/a821c3158c91c2196fbd.css",
    "revision": "489e93ae3064e9fc135a58fd1ad785aa"
  },
  {
    "url": "/_nuxt/c81bc1d13a624cbc25c8.css",
    "revision": "bee7f259c15a65f07cba2f47d3354ebc"
  },
  {
    "url": "/_nuxt/cbcb547477e2aee85fdb.js",
    "revision": "8d58662892fbf37cd94e95390bcfdab9"
  },
  {
    "url": "/_nuxt/eb68451c1fc3076ef57c.css",
    "revision": "114cf8a798c497fb521de4c50ba58cb6"
  },
  {
    "url": "/_nuxt/efd88a8a783f8f4769fe.js",
    "revision": "7d0996efcef36549a2011e43a0eefc39"
  },
  {
    "url": "/_nuxt/fb4fd8c099538339e531.js",
    "revision": "5572ebf7437b373ca6d60ccc6052dc2e"
  },
  {
    "url": "/_nuxt/fb676d07f2b6af5551f6.js",
    "revision": "e38a0fb610dc4b1837ca73e602bf1ee2"
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
