import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old links from when the page lived at primebottomline.vc/advisory
  async redirects() {
    return [
      { source: "/advisory", destination: "/", permanent: true },
      { source: "/advisory/privacy", destination: "/privacy", permanent: true }
    ];
  }
};

export default nextConfig;
