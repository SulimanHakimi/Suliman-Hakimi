const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      assert: require.resolve('assert/'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
};
