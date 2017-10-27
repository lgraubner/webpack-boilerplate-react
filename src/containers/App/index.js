import React from 'react'
import Helmet from 'react-helmet'
import Aux from 'react-aux'
import PropTypes from 'prop-types'

const App = ({ children }) => (
  <Aux>
    <Helmet>
      <title>My app</title>
    </Helmet>
    {children}
  </Aux>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
