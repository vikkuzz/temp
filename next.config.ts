import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  experimental: {
    ppr: 'incremental'
  }
  /* config options here */
};

export default nextConfig;
