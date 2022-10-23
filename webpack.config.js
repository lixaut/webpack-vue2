
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.s[ca]ss$/, use: ['style-loader', 'css-loader', 'scss-loader'] },
      { 
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: './dist',
    open: true,
    host: 'local-ip',
  },
  mode: 'development',
}