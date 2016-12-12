import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import Base from 'containers/Base';

import styles from './styles.css';

const NotFound = () => (
  <Base>
    <div className={styles.notfound}>
      <Helmet title="Not found" />
      <Link to="/">Home</Link>
    </div>
  </Base>
);

export default NotFound;
