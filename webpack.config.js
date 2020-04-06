const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env, options) => {
  const isProduction = options.mode === 'production'
  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: ['./src/index.js', './src/style.scss'],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? 'none' : 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    watch: !isProduction,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      // new OptimizeCssAssetsPlugin(),
      new ManifestPlugin(),
      new UglifyJsPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|png|svg|jp[e]*g|gif|ico)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
  }
  return config
}
