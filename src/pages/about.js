import React from "react"
import { Link } from "gatsby"
import Card from '../components/card';
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
      <a href="https://www.linkedin.com/in/kate-butterfield/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      <a href="https://dribbble.com/katebutter" target="_blank"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
      <a href="https://medium.com/@katebutterfield.design" target="_blank"><FontAwesomeIcon icon={['fab', 'medium']} /></a>
      </div>
      </div>

      <div class="info-card">
        <div class="intro">
          <h3>Background</h3>
          <div class="line"></div>
          <p>I'm an <span class="highlight">enthusiastic designer</span>, currently working on improving the product experience at <a href="https://www.entelo.com/" target="_blank">Entelo</a>. My background in Interactive Media and Graphic Design allows me to build creative solutions while leveraging the power of technology.
          <br/>
          <br/>
          I'm a naturally collaborative person and value my relationships with product stakeholders, teammates, and users. <span class="highlight">I'm driven by innovation and excited by the opportunity to help scale a solution by making informed and deliberate design decisions. </span>
          <br/>
          <br/>
          In my free time you can find me exploring San Francisco, grabbing coffee, or reading up on design trends from my <a href="https://muz.li/" target="_blank">'secret source'</a>.
          </p>
        </div>
      </div>
      </div>

      <div class="CardGroup">
        <a href="https://open.spotify.com/show/1SNlsaEru8hM5yXXc6vvuz?si=cRZMAlDRSESBcfcnAEqVOw" target="_blank"><Card
          title="Listening To  🎧"
          text="New Layer · Podcast"
        /></a>
        <a href="https://medium.com/google-design/state-of-design-systems-2019-ff5f26ada71" target="_blank"><Card
          title="Reading About 📚"
          text="Design Systems · Medium"
        /></a>
        <a href="https://paper.dropbox.com/doc/Smashing-Conf-2019--ArbGu4KOJG9NCDZ~i~CUjE71AQ-u0MqJgDDzO3MeNMhRpWBk" target="_blank"><Card
          title="Attending 📝"
          text="UX Conferences"
        /></a>
      </div>



    </div>
  </Layout>
)

export default About
