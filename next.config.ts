import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow devices on the local network to load Next's development scripts.
  allowedDevOrigins: ["192.168.1.6"],
};

export default nextConfig;
