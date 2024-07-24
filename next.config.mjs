/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_RSA_KEY: process.env.PUBLIC_RSA_KEY,
      },
};

export default nextConfig;
