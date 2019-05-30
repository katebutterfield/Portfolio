import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
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
					Homepage | Notifications —
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

  <article>
		<div class="thumbnail2"><img src={require('../images/form-tabs.gif')}/>
    </div>
		<div class="content">
			<h2 class="project-tile">
				<span class="background-wrapper">
					Form Builder —
				</span>
			</h2>
			<p>I created a self-serving form builder for EmployStream's web app that cut down on time spent training new users. </p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">Anima</div>
            <div class="tags">Animation</div>
            <div class="tags">Lucky Orange</div>
        </div>
			</div>
			<Link to="/">View Project</Link>
		</div>
	</article>

  <article>
		<div class="thumbnail3"><img src={require('../images/hsad.png')}/>
    </div>
		<div class="content">
			<h2 class="project-tile">
				<span class="background-wrapper">
					Athletic Director Mobile App —
				</span>
			</h2>
			<p>I mocked up an app design for HSAD Network, a communication platform for Athletic Directors.</p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">Illustrator</div>
            <div class="tags">Photoshop</div>
            <div class="tags">Grid Layout</div>
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
