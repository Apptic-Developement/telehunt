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
