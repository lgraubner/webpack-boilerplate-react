import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const Test = () => (
  <div className="test">
    <Helmet title="test" />
    TEST
  </div>
);

Test.propTypes = {
  children: PropTypes.node,
};

export default Test;
