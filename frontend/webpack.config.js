const path = require("path");

module.exports = {
  // other configuration options...
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
