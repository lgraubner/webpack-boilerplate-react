import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import styles from './styles.css';

const NotFound = () => (
  <div className={styles.notfound}>
    <Helmet title="Not found" />
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;
