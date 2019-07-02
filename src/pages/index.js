import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/card';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Kate Butterfield --
          </h1>
          <div className="Kate">Portfolio</div>
          <p>I design thoughtful digital experiences for all humans.</p>
          <Link to="/design">See for yourself →</Link>
    </div>
    </div>
    </div>
    <div className="Cards">
    <div className="CardGroup">
    <a href="https://medium.com/@katebutterfield.design/building-a-design-system-from-scratch-ae6ffda515b5?source=friends_link&sk=ee168b484339bc29db2ad13412fbb44b"><Card
      title="Design System"
      text="1 Project"
      image={require('../images/design-system.jpg')}
    /></a>
    <Link to="/mentors"><Card
      title="Interaction Design"
      text="1 Project"
      image={require('../images/interaction-design.jpg')}
    /></Link>
    <Link to="/hsad"><Card
      title="Mobile App Design"
      text="1 Project"
      image={require('../images/mobile-design.jpg')}
    /></Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
