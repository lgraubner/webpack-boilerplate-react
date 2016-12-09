const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = path.join(process.cwd(), 'app/app.js');
const buildFolder = path.resolve(__dirname, 'dist');

const webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:4080',
    'webpack/hot/only-dev-server',
    entry,
  ],
  output: {
    path: buildFolder,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]___[hash:base64:5]'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
        loaders: [
          'file-loader',
          'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    root: [
      path.resolve('node_modules'),
      path.resolve('app'),
    ],
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      'node_modules',
    ],
  },
  plugins: [
    new CleanPlugin([buildFolder]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
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
        minifyURLs: true,
      },
      hash: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
  target: 'web',
  devTool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: buildFolder,
    publicPath: '/',
    port: 4080,
  },
};

module.exports = webpackConfig;
