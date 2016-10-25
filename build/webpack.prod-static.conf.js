var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var routes = require('../src/build-config/routes')
console.log('Routes to build: ', routes, '\n')

// remove app entry point
baseWebpackConfig.entry = {}

var webpackConfig = merge(baseWebpackConfig, {
  // necessary for 'vue-server-renderer' works
  target: 'node',
  devtool: false,
  entry: {
    static: './src/app/static-entry.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js'),
    // necessary for 'vue-server-renderer' and 'static-site-generator-webpack-plugin' works
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new StaticSiteGeneratorPlugin('static', routes)
  ]
})

module.exports = webpackConfig
