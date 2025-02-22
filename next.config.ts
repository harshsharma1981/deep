import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'deepadmin1.onrender.com',
        port: '1337',
        pathname: '/uploads/**', // Adjust based on Strapi image paths
      },
    ],
    domains: ["images.pexels.com","deepadmin1.onrender.com"], // ✅ Allow Pexels images
    unoptimized: true, // 👈 Disable optimization (try enabling later)

  },  
};

export default nextConfig;
