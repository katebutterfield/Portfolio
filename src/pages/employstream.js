import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import { Link } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const EmployStream = () => (
  <Layout>
    <SEO title="EmployStream" />
    <div class="ESHeader">
    <img src={require('../images/employstream-logo.svg')}/>
    <p>Onboarding and Engagement for Staffing (Web App)</p>
    </div>
    <div class="description">
      <div class="es-list">
        <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>ROLE</h4><p>Lead Designer/Project Manager 👩🏻‍💻</p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROBLEM</h4><p>EmployStream's Customer Success team was spending hours on the phone training each customer how to build forms for contracts, payroll, and new hire onboarding. In fact, the company created an entire job dedicated to building forms for customers because <span class="es-highlight">the old tool was time consuming, difficult to use, and involved a steep learning curve.</span></p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>SOLUTION</h4><p>I did a complete overhaul of the form building process, transforming the product into <span class="es-highlight">a self-serving and visual way for staffing firms to build forms.</span> I decided on a drag-and-drop format which allows each field type to act as a building block on the page, a concept that is easy to grasp even with no technical background.</p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROCESS</h4><p>
          Research → Whiteboarding/Wireframing → Mockups → Iteration, Iteration, Iteration → Implementation
          </p></li></ScrollAnimation>
        </ul>
      </div>
        </div>
      <div class="wireframes">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h2>Wireframe</h2></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img src={require('../images/form-wireframe.png')}/></ScrollAnimation>
      </div>
    <div class ="ProjectShowcase">
      <div class ="es-sticky">
        <h2>Final Product</h2>
      </div>
      <div class="scroll">
        <h4>Initial Form Setup</h4>
        <p>This is historically the most difficult part of the process because users don't know where to start. I created a clear landing area for each field type so the user knows where to drag and drop them, and can visualize the end result based on the layout of this page.</p>
        <img src={require('../images/form-empty.jpg')}/>
        <h4>Flexible Layout</h4>
        <p>Previously, the system could only create single-column forms. With this new design, users are able to switch between a full/half column layout for fields like "First Name" and "Last Name" which make sense placed side by side.</p>
        <img src={require('../images/form-columns.jpg')}/>
        <h4>Drag and Drop</h4>
        <p>To allow for more flexibility, this design supports the ability to reposition fields on the page by dragging and dropping them to snap into place.</p>
        <img src={require('../images/form-drag.jpg')}/>
        <h4>Conditional Logic</h4>
        <p>If 'this' then 'that' - This is the basic idea behind conditional formatting. I built this functionality into the "Logic" tab on the side bar so the user can configure this formatting while simultaneously viewing their changes on the form.</p>
        <img src={require('../images/form-logic.jpg')}/>
      </div>
    </div>
    <div class="mockup">
      <img src={require('../images/form-footer.jpg')}/>
    </div>
    <div class="project-nav">
    <div class ="previous-project">
    <Link to="/classhook"><Nav
    title="← Back"
    subtitle="ClassHook Redesign"
    image={require('../images/classhook-cover.jpg')}
  /></Link>
    </div>
    <div class ="next-project">
    <Link to="/hsad"><Nav
    title="Next Up →"
    subtitle="HSAD Mobile App"
    image={require('../images/hsad-cover.jpg')}
  /></Link>
    </div>
    </div>
  </Layout>
)

export default EmployStream
