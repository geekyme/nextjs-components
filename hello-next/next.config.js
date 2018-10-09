const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const compose = require("next-compose");

module.exports = compose([
  [withCSS],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]"
      }
    }
  ]
]);
