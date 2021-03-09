// Wothout next-pwa
// const withOffline = require('next-offline')
// const path = require('path');
// const nextConfig = {
//     generateInDevMode:false,
//     dontAutoRegisterSw:true,
//     generateSw:false,
//     workboxOpts: {
//         swDest: './service-worker.js',
//         swSrc: path.join(__dirname, 'sw.js'),
//     },
//     future: { webpack5: true, },
// }

// module.exports = withOffline(nextConfig)


// Without creating custom service worker

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   future: { webpack5: true, },
// });

// With custom service worker
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  future: { webpack5: true, },
});

// module.exports={
//   i18n: {
//     locales: ['fr','en-US', 'nl-NL'],
//     defaultLocale: 'fr',
//   },
// }