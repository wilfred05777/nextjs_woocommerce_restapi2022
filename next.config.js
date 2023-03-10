/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // testing sass
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   trailingSlash: false,
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300
//     };
//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")]
//   }
// };

// module.exports = nextConfig;
