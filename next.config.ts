import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Enable React Strict Mode in non-production to surface potential issues during development without impacting production performance.
  reactStrictMode: true,

  images: {
    // Use modern, highly-compressed image formats for optimal load performance and reduced bandwidth usage. ( Next.js use webep by default)
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
