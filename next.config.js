/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bekef-yoga",
  assetPrefix: "/bekef-yoga",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
