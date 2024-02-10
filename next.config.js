// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    // Add a custom path alias
    config.resolve.alias['@'] = path.resolve(__dirname, '.');

    // Example: Add an additional rule or modify the config further
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"]
    // });

    // Return the modified config
    return config;
  },
};

module.exports = nextConfig;
