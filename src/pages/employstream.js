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

    <div class="es-context">
    <div class="es-context-left">
      <ul>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>ROLE</h4><p>Lead Designer/ Project Manager 👩🏻‍💻</p></li></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>BACKGROUND</h4><p>EmployStream is an onboarding automation and candidate engagement platform for Staffing agencies. The admin tool (Workflow Manager) gives users an easy way to manage applications and onboarding documents.<span class="es-highlight"> Unfortunately, this requires the process of converting paper forms into digital ones, which can be quite a hassle.</span></p></li></ScrollAnimation>
        </ul>
        </div>
        <div class="es-context-right">
          <ul>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>June 2018 <br/>
            1 month
            </p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TEAM</h4>
            <p>CTO, Founder (Manager) <br/>
            1 Developer
            </p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TOOLS</h4><p>Sketch, Anima Toolkit</p></li></ScrollAnimation>
            </ul>
            </div>
        </div>

      <div class="es-list">
        <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROBLEM</h4><p>EmployStream's Customer Success team was spending hours on the phone training each customer how to build forms for contracts, payroll, and new hire onboarding. In fact, the company created an entire job dedicated to building forms for customers because <span class="es-highlight">the old tool was time consuming, difficult to use, and involved a steep learning curve. </span></p></li></ScrollAnimation>
          </ul>
          </div>
          </div>
          <div class ="before">
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true" offset="180"><h4>Original Form Builder</h4></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/es-form-before.jpg')}/></ScrollAnimation>
            <div class="pulsating-circle"></div>
            <div class="image-notes"><h5>← Different field types, same UI</h5></div>
          </div>
          <div class="description">
          <div class="es-list">
          <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROCESS</h4><p>
          Research → Whiteboarding/Wireframing → Mockups → Iteration, Iteration, Iteration → Implementation
          </p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>RESEARCH</h4><p>I started by talking to users about their pain points when constructing a form with the original form builder. Then, I headed to<a href="https://www.fullstory.com/" target="_blank"> FullStory</a> to take some notes on how users were currently interacting with the tool. Some feedback I collected:</p>
          <h5> Lack of control over the layout of the page</h5>
          <h5>Confusing interface - All field types look the same</h5>
          <h5>Long, manual process with required training session</h5>
          </li></ScrollAnimation>
        </ul>
      </div>
      <div class="es-questions">
      <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>"Be patient with having your documents added."</h2>
      <p>- Julie, EmployStream User</p>
      <a href="https://www.g2.com/products/employstream/reviews/employstream-review-1025960" target="_blank"> G2 Review</a>
      </div></ScrollAnimation>
      </div>
        </div>
        <div class="description">
        <div class="es-list">
        <ul>
          <li class><ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>SOLUTION</h4><p>
          I decided to approach the problem with 3 main solutions: </p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Field Type Visualization:</h5><p> <span class="es-highlight">I associated a different icon with each field type (Paragraph, Date, Money, etc.)</span>, which will reduce confusion when interacting with them.</p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/es-field-types.jpg')}/></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Drag & Drop Functionality:</h5><p>I decided on a <span class="es-highlight">drag-and-drop system - a visual way to interact with the interface</span> that displays a clear landing area for each field.
          </p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Customization:</h5><p>Users should have the freedom to customize the layout of the page to their liking. I planned for this in my design process, and came up with a feature that <span class="es-highlight">allows users to switch between a single or double column field</span> (Dev team said no to more than 2 columns).
          </p></ScrollAnimation>
          </li>
          </ul>
        </div>
        </div>
        <div class="description">
          <div class="es-list">
            <ul>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>IDEATION</h4><p>I immediately started whiteboarding with our Implementation Specialist who uses the Form Builder daily.</p></li></ScrollAnimation>
              </ul>
              </div>
              </div>
      <div class="wireframes">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>Wireframe</h4></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img src={require('../images/form-wireframe.png')}/></ScrollAnimation>
      </div>

      <div class="es-before-after">
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
        <div class="es-before">
        <h5>1st Iteration</h5>
        <img class src={require('../images/es-iteration-1.jpg')}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
        <div class="es-after">
        <h5>Final Iteration</h5>
        <img class src={require('../images/es-iteration-2.jpg')}/>
        <div class="pulsating-circle-2"></div>
        <div class="image-notes-2"><h5>All steps live in one sidebar ↓</h5></div>
        </div>
        </ScrollAnimation>
      </div>
      <div class="es-form-tabs ">
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
        <div class="es-before">
        <h2>Side Bar</h2>
        <p>I decided on a tab system within the sidebar to allow users to configure all aspects of the form in one page. The red '!' icon indicates that the user needs to take action on that tab before completing the form.</p>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
        <div class="es-tabs">
        <img class src={require('../images/form-tabs.gif')}/>
        </div>
        </ScrollAnimation>
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
