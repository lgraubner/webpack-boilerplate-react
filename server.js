/* eslint import/no-extraneous-dependencies:0, global-require:0, no-console:0 */
const webpack = require('webpack');
const express = require('express');
const path = require('path');

// create app
const app = express();

// set port
const port = 4080;
app.set('port', port);

if (app.get('env') === 'development') {
  // boot up webpack and dev server
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const webpackConfig = require('./webpack.dev.js');

  const compiler = webpack(webpackConfig);

  const middleware = webpackDevMiddleware(compiler, webpackConfig.devServer);

  // enable hot reloading
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

// serve
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Dev server listening on port ${port}.`);
});
