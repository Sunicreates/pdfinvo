/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: require('path').join(__dirname, '..'),
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['../backend/**/*']
    }
  }
};

export default nextConfig;
