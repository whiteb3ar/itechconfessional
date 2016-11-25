var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  //devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,  
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
          test: /\.css$/,
          loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("React Workshop"),
    new webpack.optimize.CommonsChunkPlugin({ 
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/img/*', to: '/build/img' }
    ]),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
  ],
  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}