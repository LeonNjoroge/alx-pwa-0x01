import withPWAInit from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */

// Initialise PWA with correct nested options
const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
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
