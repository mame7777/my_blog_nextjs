// import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages({
  /* config options here */
  reactStrictMode: true,
  output: 'export',
});

export default nextConfig;
