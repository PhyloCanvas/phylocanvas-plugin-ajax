module.exports = {
  entry: [
    './dev/index.js',
  ],
  output: {
    filename: 'ajax-dev.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /webpack/, loader: 'babel?stage=0' },
    ],
  },
};
