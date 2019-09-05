importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a2036d3d4df0fbf031b.js",
    "revision": "85dbb6fa1bbd7a637f2e4a31d67d7bda"
  },
  {
    "url": "/_nuxt/3282b36482608fee78a2.js",
    "revision": "35558145c0a1034a28331022649c685b"
  },
  {
    "url": "/_nuxt/36e2ec937a2743c82f7c.js",
    "revision": "74b4902f5c526227b53cac260b9e46a6"
  },
  {
    "url": "/_nuxt/4f70be9d3fe2606ea87c.js",
    "revision": "5060b1a61224a8dbcbe9f8f5b33586c8"
  },
  {
    "url": "/_nuxt/507281f17062d8304786.js",
    "revision": "a1088272ffff39c685aa128a3acddfaa"
  },
  {
    "url": "/_nuxt/68495a9e2f27ae7eee7f.js",
    "revision": "c68402d19a9eb82f10c63988268879da"
  },
  {
    "url": "/_nuxt/788e999c0e897c3aa999.js",
    "revision": "65ee7911187cf631dea93312fe56befe"
  },
  {
    "url": "/_nuxt/975e7e33fab2aae7764e.js",
    "revision": "d5b86d7f9c2271f74660373d949ea3c7"
  },
  {
    "url": "/_nuxt/983204103a637ebeae4b.js",
    "revision": "9d6e8ad715694646ce66247fa6182c1d"
  },
  {
    "url": "/_nuxt/c094ffbdfd224eb7451f.js",
    "revision": "4aadc8dd0a486ddce4531e82c394272c"
  },
  {
    "url": "/_nuxt/c70099d2fe9ce6f7940e.js",
    "revision": "31a348f8316025ad51241522804bf3bd"
  },
  {
    "url": "/_nuxt/d9c0e311c0aeb78f6ce0.js",
    "revision": "d31ae86ed63748e75e6c467ed22a2512"
  },
  {
    "url": "/_nuxt/e762ca309d7f749c6bde.js",
    "revision": "c3b92ff554c511d3a08a7d5feffd6ae5"
  },
  {
    "url": "/_nuxt/e82a79732fb037841226.js",
    "revision": "e0554d679ed8b8465cc1a1e57924b6f9"
  },
  {
    "url": "/_nuxt/ff9a84e1e0801e000bb7.js",
    "revision": "7839f29252614ab87ee9ff9e0575116a"
  }
], {
  "cacheId": "Kidchoo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
