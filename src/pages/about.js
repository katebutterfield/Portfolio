import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Kate" />
    <div class="about">
    <div className="Hero">
        <div className="HeroGroup">
          <p>Page in progress...</p>
          <Link to="/">Back to homepage →</Link>
        </div>
    </div>
    </div>
  </Layout>
)

export default About
