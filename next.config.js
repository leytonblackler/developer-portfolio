/* eslint-disable import/no-default-export -- Next.js config must be the default export */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      /**
       * Hygraph CDN
       */
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      /**
       * Spotify CDN (album artwork)
       */
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
      /**
       * Apple Music CDN (album artwork)
       */
      {
        protocol: "https",
        hostname: "**.mzstatic.com",
      },
    ],
  },
};

export default nextConfig;
