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
          <p>I solve real problems in tech using pixel perfect boxes and drop-shadows.</p>
          <Link to="/design">See for yourself →</Link>
    </div>
    </div>
    </div>
    <div className="Cards">
    <div className="CardGroup">
    <Card
      title="Design System"
      text="1 Project"
      image={require('../images/design-system.jpg')}
    />
    <Card
      title="Interaction Design"
      text="1 Project"
      image={require('../images/interaction-design.jpg')}
    />
    <Card
      title="Mobile App Design"
      text="2 Projects"
      image={require('../images/mobile-design.jpg')}
    />
    </div>
    </div>
  </Layout>
)

export default IndexPage
