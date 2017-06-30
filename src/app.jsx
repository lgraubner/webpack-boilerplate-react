// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

const render = (Component: Function) => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

render(App);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
