import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone!</h1>
    <p>My name is Lena. I go by meowcodes or meowcodes9 on the web.</p>
    <p>I started coding early 2017 with R and have been teaching myself different languages. I've worked with C, HTML, CSS, JavaScript, Ruby on Rails, and Python so far! I was a front-end web developer for a blockchain start-up in the last six months. I'm learning algorithms, CS basics, and back-end now. I'm preparing to attend a bootcamp so I can get a full-time software engineering job!</p>
    <p>I hope I'll get to code with you at JAMstack Hackathon soon.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
