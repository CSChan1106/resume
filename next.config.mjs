

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  basePath: isProd? '/resume': '',
  assetPrefix: isProd? '/resume/' : ''
};


export default nextConfig;
