/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_RSA_KEY: process.env.PUBLIC_RSA_KEY,
      },

    i18n:{
      locales: ['en-US', 'fr', 'nl-NL'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en-US',
    }
};

export default nextConfig;
