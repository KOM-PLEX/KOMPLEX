import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // disables Next.js' built-in image optimization
  },
};

export default nextConfig;
