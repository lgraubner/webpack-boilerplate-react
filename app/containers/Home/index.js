import React from 'react';
import Helmet from 'react-helmet';

import Base from 'containers/Base';

import styles from './styles.css';

const Home = () => (
  <Base>
    <Helmet title="Home" />
    <div className={styles.home}>
      HOME
    </div>
  </Base>
);

export default Home;
