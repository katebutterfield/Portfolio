import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <div>
  <section class="projects">
	<article>
		<div class="thumbnail"><img src={require('../images/homepage-cropped.png')}/>
    </div>
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
