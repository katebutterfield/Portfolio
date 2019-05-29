import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee,)

const About = () => (
  <Layout>
    <SEO title="About Kate" />
    <div class="about">
    <div class="container-fluid">
	   <div class="profile-card">
		<div class="cover">
    <img src={require('../images/blue-bg.jpg')} width="350"/>
    </div>
		 <img class="profile-picture" src={require('../images/kate-profie.jpeg')} width="200"/>
			<h3  class="user-name"> Kate Butterfield </h3>
			<span class="user-position"> Product Designer</span>
			<p class="location">📍 San Francisco </p>
			<div class="social">
      <a href="https://www.linkedin.com/in/kate-butterfield/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      <a href="https://dribbble.com/katebutter"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
      <a href="https://www.behance.net/butterk28f56"><FontAwesomeIcon icon={['fab', 'behance']} /></a>
      </div>
      </div>
      </div>
    </div>
  </Layout>
)

export default About
