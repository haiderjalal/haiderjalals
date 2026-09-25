import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,

  // @splinetool/* are ESM-only (exports map has no "require" condition), so the
  // server build cannot externalise them as CJS. Transpiling fixes the
  // "Package path . is not exported" resolution error.
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  
  // Optimize bundle
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap', 'aos'],
  },
  
  // Webpack: only the Spline resolution fix. Next's default splitChunks is better
  // tuned than a hand-rolled "everything in one vendors chunk" override, which forced
  // all of node_modules onto every route.
  webpack: (config: any) => {
    // @splinetool/react-spline ships an ESM-only exports map (only a "types" and
    // "import" condition). Next's server/RSC layers resolve with "require"/"react-server",
    // find no match, and fail with "Package path . is not exported". Point webpack at the
    // ESM build directly to bypass the exports map.
    config.resolve.alias = {
      ...config.resolve.alias,
      "@splinetool/react-spline$": path.resolve(
        process.cwd(),
        "node_modules/@splinetool/react-spline/dist/react-spline.js"
      ),
    };

    return config;
  },
};

export default nextConfig;
