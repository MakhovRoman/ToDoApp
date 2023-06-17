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
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js', '.json'],
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src', 'components'),
      "@utils": path.resolve(__dirname, 'src', 'utils'),
      "@styles": path.resolve(__dirname, 'src', 'styles'),
      "@store": path.resolve(__dirname, 'src', 'store'),
      "@assets": path.resolve(__dirname, 'src', 'assets'),
      "@typings": path.resolve(__dirname, 'src', 'typings')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
