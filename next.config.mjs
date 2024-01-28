
import nextBundler from '@next/bundle-analyzer';

const withBundleAnalyzer = nextBundler({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vcodes.xyz",
        port: "",
      },
    ],
  },
};

export default nextConfig;
