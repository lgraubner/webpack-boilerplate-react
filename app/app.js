import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';

import 'normalize.css/normalize.css';

import reducers from './reducers';

import App from './containers/App';
import Test from './containers/Test';
import NotFound from './containers/NotFound';

const font = new FontFaceObserver('Open Sans', {});

font.load().then(() => {
  document.body.classList.add('wf-loaded');
});

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/test" component={Test} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('app'));
