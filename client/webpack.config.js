var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      __dirname + '/src/index.jsx',
      'webpack-dev-server/client?http://localhost:8080'
    ]
  },
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loaders: ['babel?presets[]=es2015,presets[]=react,plugins[]=transform-object-rest-spread'],
        test: /\.jsx?$/,  
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("React Workshop"),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}