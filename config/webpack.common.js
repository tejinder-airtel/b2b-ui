var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
       {
           test: /\.css$/,
           exclude: helpers.root('src', 'app'),
           loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
       },
      {
          test: /\.css$/,
          include: helpers.root('src', 'app'),
          loader: 'css-to-string-loader!css-loader'
      }
      /*{
        test: /\.css$/,
        // include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }*/
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({ jQuery: helpers.root('src/app/js/jquery-2.1.1.min.js'), $: helpers.root('src/app/js/jquery-2.1.1.min.js'), jquery: helpers.root('src/app/js/jquery-2.1.1.min.js') })
  ]
};
