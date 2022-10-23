
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // vue loader
      { test: /\.vue$/, use: 'vue-loader' },
      // css loader
      { 
        test: /\.s[ca]ss$/, 
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader', 
          'scss-loader'
        ] 
      },
      // js loader
      { 
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      // img loader
      { 
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      // url loader
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 2048, // 超过 2048 使用 file-loader
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: './dist',
    open: true,
    host: 'local-ip',
    hot: true,
  },
  mode: 'development',
}