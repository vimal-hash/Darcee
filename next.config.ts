import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required to process three.js correctly
  transpilePackages: ['three'], 
};

module.exports = nextConfig;

export default nextConfig;
