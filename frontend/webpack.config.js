const debug = global.webpackDebugEnabled;
const mode = debug ? 'development' : 'production';

const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');
const NODE_MODULES_DIR = path.resolve('./node_modules');
const BOOTSTRAP_DIR = path.resolve('./node_modules/bootstrap');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug,
  }),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
  }),
];

if (!debug) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));
}

const webpackConfig = {
  entry: ['@babel/polyfill', `${APP_DIR}/index.jsx`],
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
  },
  resolve: {
    modules: [NODE_MODULES_DIR, APP_DIR],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          BOOTSTRAP_DIR,
          APP_DIR,
        ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins,
  mode,
};

module.exports = webpackConfig;
