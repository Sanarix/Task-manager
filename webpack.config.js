const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './develop/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
  },
  devServer: {
    port: 8888
  },
  cache: {
    type: 'memory'
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './develop/index.html'
    }),
    new CleanWebpackPlugin(),
    new copyPlugin({
      patterns: [
        {from: './develop/img', to: 'img'}
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ca]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  }
}