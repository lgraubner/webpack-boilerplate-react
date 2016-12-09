import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import Header from 'components/Header';

import styles from './styles.css';

const App = () => (
  <div className={styles.app}>
    <Helmet
      titleTemplate="%s - Tierpiraten"
      defaultTitle="Tierpiraten"
      meta={[
        {
          name: 'description',
          content: 'This is da description',
        },
      ]}
    />
    <Header />
    <Link to="/testa">Test</Link>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
