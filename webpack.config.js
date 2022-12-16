import { resolve } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import copyPlugin from 'copy-webpack-plugin'

export const entry = './develop/js/index.js'
export const output = {
  path: resolve(__dirname, 'public'),
  filename: '[name].js',
}
export const devServer = {
  port: 8888
}
export const cache = {
  type: 'memory'
}
export const devtool = 'source-map'
export const optimization = {
  splitChunks: {
    chunks: 'all'
  }
}
export const plugins = [
  new HTMLWebpackPlugin({
    template: './develop/index.html',
    filename: 'index.html'
  }),
  new HTMLWebpackPlugin({
    template: './develop/pages/about.html',
    filename: 'about.html'
  }),
  new HTMLWebpackPlugin({
    template: './develop/pages/contacts.html',
    filename: 'contacts.html'
  }),
  new CleanWebpackPlugin(),
  new copyPlugin({
    patterns: [
      { from: './develop/img', to: 'img' }
    ]
  })
]
export const module = {
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