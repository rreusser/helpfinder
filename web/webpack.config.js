'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3210;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

var config = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-web',
      'ReactNativeART': 'react-art',
    },
    extensions: ['', '.js', '.jsx'],
  },
  entry: isProd? [
    config.paths.index
  ]: [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web', 'app']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd? PROD: DEV),
      }
    }),
    isProd ? new webpack.ProvidePlugin({
      React: "react"
    }) : new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin({
      title: 'HelpFinder',
      template: 'web/index.ejs',
      inject: 'body',
    }),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      },
      include: [config.paths.src],
      exclude: [/node_modules/]
    } ]
  }
};

if (isProd) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({

  }))
}

module.exports = config
