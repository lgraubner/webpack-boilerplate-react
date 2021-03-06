/* eslint import/no-extraneous-dependencies:0 */
const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = path.join(process.cwd(), 'src/app.js')
const outputPath = path.resolve(__dirname, 'dist')

const webpackConfig = {
  entry: {
    app: ['react-hot-loader/patch', entry]
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: true
          }
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|eot|svg|otf|ttf|woff|woff2)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: ['node_modules']
  },
  plugins: [
    new CleanPlugin([outputPath]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    publicPath: '/',
    historyApiFallback: true,
    hot: true
  }
}

module.exports = webpackConfig
