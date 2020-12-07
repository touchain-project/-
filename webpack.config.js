const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    watchContentBase: true,
    inline: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about/index.html",
      filename: "./about/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/en/index.html",
      filename: "./en/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/en/about/index.html",
      filename: "./en/about/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '',
            },
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/'
            }
          }
        ],
      },
      {
        test: /\.html$/i,
        use: [
          'html-loader',
        ]
      },
    ]
  }
};