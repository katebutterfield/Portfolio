import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyLoad from 'react-lazy-load'
import Project from '../components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Design = () => (
  <Layout>
    <SEO title="Design" />
    <div>
  <section class="projects">
    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"><Link to="/entelo"><Project
    title="Homepage"
    subtitle="UX/UI Design · User Research · Prototyping"
    text="I redesigned the Entelo Homepage to optimize for user retention and a better workflow."
    image={require('../images/entelo-cover.jpg')}
  /></Link>
  </div>
   <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="400" data-aos-easing="ease-in-out"><Link to="/classhook"><Project
    title="Site Redesign"
    subtitle="UX/UI Design · Flowchart · Grid Layout"
    text="I did a complete overhaul of the main pages on the ClassHook site with the goal of increasing MAU."
    image={require('../images/classhook-cover.jpg')}
  /></Link>
  </div>
   <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="40" data-aos-duration="500" data-aos-easing="ease-in-out"><Link to="/employstream"><Project
    title="Form Configuration"
    subtitle="UX/UI Design · Animation · Interaction Design"
    text="I created a self-serving form builder for EmployStream's web app that cut down on time spent training new users."
    image={require('../images/es-cover.jpg')}
  /></Link>
  </div>
   <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" data-aos-duration="600" data-aos-easing="ease-in-out"><Link to="/hsad"><Project
    title="Athletic Director Mobile App"
    subtitle="Mobile Design · Branding · Responsive"
    text="I mocked up an app design for HSAD Network, a communication platform for Athletic Directors."
    image={require('../images/hsad-cover.jpg')}
  /></Link>
  </div>
  </section>
    </div>
  </Layout>
)

export default Design
