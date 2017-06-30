/* eslint import/no-extraneous-dependencies:0, global-require:0, no-console:0 */
const express = require('express');
const path = require('path');

// create app
const app = express();

// set port
const port = 4080;
app.set('port', port);

// TODO: SSR

// serve
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Dev server listening on port ${port}.`);
});
