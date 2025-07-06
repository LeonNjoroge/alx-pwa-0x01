// import withPWAInit from '@ducanh2912/next-pwa';
//
// /** @type {import('next').NextConfig} */
//
// // Initialise PWA with correct nested options
// const withPWA = withPWAInit({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   workboxOptions: {
//     skipWaiting: true,
//     clientsClaim: true,
//     runtimeCaching: [
//       {
//         urlPattern: /^https:\/\/m\.media-amazon\.com\/.*\.(?:png|jpg|jpeg|svg|webp)$/,
//         handler: 'CacheFirst',
//         options: {
//           cacheName: 'amazon-images',
//           expiration: {
//             maxEntries: 50,
//             maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
//           },
//         },
//       },
//     ],
//   },
// });
//
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['m.media-amazon.com'],
//   },
// };
//
// export default withPWA(nextConfig);

import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // ✅ not disabled in production!
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/m\.media-amazon\.com\/.*\.(?:png|jpg|jpeg|svg|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'amazon-images',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/your-domain\.vercel\.app\/$/, // ✅ Cache homepage
        handler: 'NetworkFirst',
        options: {
          cacheName: 'start-page',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
        },
      },
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPWA(nextConfig);
