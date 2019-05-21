import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <div>
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Here's some cool design stuff</h1>
          <p>Enjoy.</p>
        </div>
      </div>
  <section id="projects">
	<article>
		<div class="thumbnail th-1"></div>
		<div class="content">
			<h2 class="project-tile">
				<span class="background-wrapper">
					Homepage | Notifications —<span></span>
				</span>
			</h2>
			<p>I redesigned the Entelo Homepage to optimize for a better workflow and user retention. </p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">InVision</div>
            <div class="tags">UX</div>
            <div class="tags">UI</div>
        </div>
			</div>
			<Link to="/">View Project</Link>
		</div>
	</article>
  </section>
    </div>
  </Layout>
)

export default Design
