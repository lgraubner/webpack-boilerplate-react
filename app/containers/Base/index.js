import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';

import styles from './styles.css';

const Base = ({ children }) => (
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
    {children}
  </div>
);

Base.propTypes = {
  children: PropTypes.node,
};

export default Base;
