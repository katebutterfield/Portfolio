import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import { Link } from "gatsby"


const HSAD = () => (
  <Layout>
    <SEO title="HSAD Network" />
    <div class="HSADHeader">
    <img src={require('../images/hsad-logo.svg')}/>
    <p>Athletic Directior Platform (Mobile App)</p>
    </div>
    <div class="description">
      <div class="hsad-list">
        <ul>
          <li><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li>
          <li><h4>PROBLEM</h4><p>High School AD Network has traditionally only been available as a web app. The tool's main purpose is to communicate with other AD's, which could occur at any point in the day. If a user doesn't have their desktop handy they won't get the best experience using the platform.</p></li>
          <li><h4>SOLUTION</h4><p>I proposed a mobile app design that would allow Athletic Directors to post information, schedule games, message other AD's, and sell equipment from their mobile device any time, anywhere.</p></li>
          <li><h4>PROCESS</h4><p>
          Research → Wireframing → Mockups
          </p></li>
        </ul>
      </div>
        </div>
      <div class="wireframes">
        <h4>Branding</h4>
        <img src={require('../images/hsad-branding.png')}/>
      </div>
    <div class ="ProjectShowcase">
      <div class ="hsad-sticky">
        <h2>Final Product</h2>
      </div>
      <div class="mobile-scroll">
        <img src={require('../images/hsad-splash.jpg')}/>
        <img class="offset" src={require('../images/hsad-sign-up.jpg')}/>
        <img src={require('../images/hsad-register.jpg')}/>
        <img class="offset" src={require('../images/hsad-approval.jpg')}/>
        <img src={require('../images/hsad-notif.jpg')}/>
        <img class="offset"
        src={require('../images/hsad-inbox.jpg')}/>
        <img src={require('../images/hsad-sell.jpg')}/>
      </div>
    </div>
    <div class="footer">
      <img src={require('../images/hsad-footer.jpg')}/>
    </div>
    <div class="project-nav">
    <div class ="previous-project">
    <Link to="/employstream"><Nav
    title="← Back"
    subtitle="EmployStream Forms"
    image={require('../images/es-cover.jpg')}
  /></Link>
    </div>
    <div class ="next-project">
    <Link to="/about"><Nav
    title="Continue to →"
    subtitle="Learn about me!"
    image={require('../images/kate-profie.jpeg')}
  /></Link>
    </div>
    </div>
  </Layout>
)

export default HSAD
