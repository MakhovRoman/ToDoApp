const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {sourceMap: true}},
          {loader: "sass-loader", options: {sourceMap: true}}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
