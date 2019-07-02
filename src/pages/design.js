import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyLoad from 'react-lazy-load'

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <div>
  <section class="projects">
	<article>
		<div class="thumbnail">
    <LazyLoad height={400} offsetHorizontal={50}>
    <img src={require('../images/homepage-cropped.jpg')}/>
    </LazyLoad>
    </div>
		<div class="content">
    <div class="logo">
    <img src={require('../images/entelo-logo.svg')}/>
    </div>
			<h2 class="project-tile">
				<span class="background-wrapper">
					Homepage
				</span>
			</h2>
			<p>I redesigned the Entelo Homepage to optimize for user retention and a better workflow. </p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">InVision</div>
            <div class="tags">FullStory</div>
        </div>
			</div>
			<Link to="/entelo">View Project</Link>
		</div>
	</article>

  <article>
		<div class="thumbnail2">
    <LazyLoad height={400} offsetHorizontal={50}>
    <img src={require('../images/form-tabs.gif')}/>
    </LazyLoad>
    </div>
		<div class="content">
    <div class="logo">
    <img src={require('../images/employstream-logo.svg')}/>
    </div>
			<h2 class="project-tile">
				<span class="background-wrapper">
					Form Builder
				</span>
			</h2>
			<p>I created a self-serving form builder for EmployStream's web app that cut down on time spent training new users. </p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">Anima Toolkit</div>
            <div class="tags">Lucky Orange</div>
        </div>
			</div>
			<Link to="/employstream">View Project</Link>
		</div>
	</article>

  <article>
		<div class="thumbnail3">
    <LazyLoad height={400} offsetHorizontal={50}>
    <img src={require('../images/hsad.png')}/>
    </LazyLoad>
    </div>
		<div class="content">
			<h2 class="project-tile">
				<span class="background-wrapper">
					Athletic Director Mobile App
				</span>
			</h2>
			<p>I mocked up an app design for HSAD Network, a communication platform for Athletic Directors.</p>
			<div class="skills">
				<div>Tools</div>
        <div class="tags-group">
				    <div class="tags">Sketch</div>
            <div class="tags">Photoshop</div>
            <div class="tags">Grid Layout</div>
        </div>
			</div>
			<Link to="/hsad">View Project</Link>
		</div>
	</article>
  </section>
    </div>
  </Layout>
)

export default Design
