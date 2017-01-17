const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.prod.js');

const isProd = process.env.NODE_ENV === 'production';
const compiler = webpack(config);
const port = isProd ? process.env.PORT : 3000;

const app = express();

if (!isProd) {
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.join(__dirname, '/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}`));
