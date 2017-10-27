import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const AboutButton = styled.div`
  background-color: red;
`

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    Home
    <AboutButton>
      <Link to="/about">About</Link>
    </AboutButton>
  </div>
)

export default Home
