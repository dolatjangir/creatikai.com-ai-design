import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
      domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
};

export default nextConfig;
