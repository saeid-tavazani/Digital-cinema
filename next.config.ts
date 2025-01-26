import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'advance-movie-api.p.rapidapi.com',
      },
      { hostname: 'media.themoviedb.org' },
      { hostname: 'img.cdno.my.id' },
      { hostname: 'image.tmdb.org' },
    ],
  },
};

export default nextConfig;
