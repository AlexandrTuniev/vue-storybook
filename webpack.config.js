var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "vue-entrybox.js",
    library: "Entrybox",
    //libraryTarget: "umd"
    libraryTarget: 'umd',
  },
  plugins: [
    //new webpack.DefinePlugin({
    // 'process.env.NODE_ENV': JSON.stringify('production')
    //}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin(),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.BannerPlugin(banner, {
    //  raw: true
    //}),
    new ExtractTextPlugin("vue-entrybox.css"),
    //new StatsPlugin("../stats.json", {
    //  chunkModules: true
    //  //exclude: [/node_modules[\\\/]react/]
    //})
  ],

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            },
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015'],
      //   }
      // }
    ],
  },
  /*
  resolve: {
    packageAlias: "browser",
    alias: {
      "vue$": "vue/dist/vue.common.js"
    }
  }
  */
};
