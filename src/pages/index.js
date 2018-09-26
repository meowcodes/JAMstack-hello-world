import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone!</h1>
    <p>My name is Lena. I go by meowcodes or meowcodes9 on the web.</p>
    <p>I've been coding for a couple of years and am looking to get serious!</p>
    <p>I hope I'll get to code with you at JAMstack Hackathon soon!.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
