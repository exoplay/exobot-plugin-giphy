module.exports = [{
  name: 'giphy',
  webpack: {
    devtool: 'source-map',
    entry: {
      giphy: './src/giphy.js',
    },
    output: {
      library: '[name].js',
      libraryTarget: 'umd',
    },
    externals: {
      generator: 'node-modules',
    },
    resolve: {
      generator: 'npm-and-modules',
      extensions: ['.js', '.json'],
    },
    loaders: [
      {
        test: /\.es6\.js$|\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015-native-modules',
          ],
          plugins: [
            'syntax-class-properties',
            'transform-class-properties',
            'transform-async-to-generator',
            'transform-object-rest-spread',
          ],
        },
      },
      'json',
    ],
    plugins: [
      'production-loaders',
      'minify-and-treeshake',
      'set-node-env',
      'abort-if-errors',
      'node-load-sourcemaps',
    ],
    node: {
      Buffer: false,
      process: false,
      global: false,
      __filename: true,
      __dirname: true,
    },
  },
}];
