import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyLoad from 'react-lazy-load'
import Project from '../components/project';

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <div>
  <section class="projects">
  <Link to="/entelo"><Project
    title="Homepage"
    subtitle="UX/UI Design · User Research · Prototyping"
    text="I redesigned the Entelo Homepage to optimize for user retention and a better workflow."
    image={require('../images/entelo-cover.jpg')}
  /></Link>
  <Link to="/classhook"><Project
    title="Site Redesign"
    subtitle="UX/UI Design · Flowchart · Grid Layout"
    text="I did a complete overhaul of the main pages on the ClassHook site with the goal of increasing MAU."
    image={require('../images/classhook-cover.jpg')}
  /></Link>
  <Link to="/employstream"><Project
    title="Form Configuration"
    subtitle="UX/UI Design · Animation · Interaction Design"
    text="I created a self-serving form builder for EmployStream's web app that cut down on time spent training new users."
    image={require('../images/es-cover.jpg')}
  /></Link>
  <Link to="/hsad"><Project
    title="Athletic Director Mobile App"
    subtitle="Mobile Design · Branding · Responsive"
    text="I mocked up an app design for HSAD Network, a communication platform for Athletic Directors."
    image={require('../images/hsad-cover.jpg')}
  /></Link>
  </section>
    </div>
  </Layout>
)

export default Design
