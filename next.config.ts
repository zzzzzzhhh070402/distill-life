import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/distill-life",
  images: { unoptimized: true },
};

export default nextConfig;
