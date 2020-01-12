import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyLoad from 'react-lazy-load'
import Project from '../components/project';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; // You can also use <link> for styles
// ..


const Design = () => (
  <Layout>
    <SEO title="Case Studies" />
    <div>
  <section class="projects">
    <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><div><Link to="/password"><Project
    title="Entelo 2.0"
    subtitle="UX/UI · Research · Large Scale Design"
    text="I led research and design post-acquisition of ConveyIQ to create a new merged product."
    image={require('../images/enteloiq-cover.jpg')}
    /></Link>
    </div></ScrollAnimation>
    <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><div><Link to="/entelo"><Project
    title="Entelo Homepage"
    subtitle="UX/UI Design · User Research · Prototyping"
    text="I redesigned the Entelo Homepage to optimize for user retention and a better workflow."
    image={require('../images/entelo-cover.jpg')}
  /></Link>
  </div></ScrollAnimation>
    <ScrollAnimation animateIn="fadeInUp" duration=".6" animateOnce="true"><div><Link to="/classhook"><Project
     title="Site Redesign"
     subtitle="UX/UI Design · Flowchart · Grid Layout"
     text="I did a complete overhaul of the main pages on the ClassHook site with the goal of increasing MAU."
     image={require('../images/classhook-cover.jpg')}
   /></Link>
   </div></ScrollAnimation>
   <ScrollAnimation animateIn="fadeInUp" duration=".7" animateOnce="true" offset="20"><div><Link to="/employstream"><Project
    title="Form Configuration"
    subtitle="UX/UI Design · Animation · Interaction Design"
    text="I created a self-serving form builder for EmployStream's web app that cut down on time spent training new users."
    image={require('../images/es-cover.jpg')}
  /></Link>
  </div></ScrollAnimation>
   <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true" offset="20"><div><Link to="/hsad"><Project
    title="Athletic Director Mobile App"
    subtitle="Mobile Design · Branding · Responsive"
    text="I mocked up an app design for HSAD Network, a communication platform for Athletic Directors."
    image={require('../images/hsad-cover.jpg')}
  /></Link>
  </div></ScrollAnimation>
  </section>
    </div>
  </Layout>
)

export default Design
