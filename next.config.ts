// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//    images: {
//       domains: ['res.cloudinary.com'],
//     unoptimized: true,
//   },
// };

// export default nextConfig;
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
   register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  },
};

export default withPWA(nextConfig);
