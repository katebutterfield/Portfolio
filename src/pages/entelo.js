import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Nav from '../components/nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Entelo = () => (
  <Layout>
    <SEO title="Entelo" />
    <div class="EnteloHeader">
    <img src={require('../images/entelo-logo.svg')}/>
    <p>Recruiting Automation Platform (Web App)</p>
    </div>
    <div class="description">
      <div class="entelo-list">
        <ul>
          <li data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li>
          <li data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class><h4>PROBLEM</h4><p>This page is the first thing the user sees when they log on to Entelo. The old homepage was cluttered with irrelevant information, making it useless to the user. <span class="highlight">It gave no guidance on how to use the product, resulting in low feature usage.</span></p></li>
          <li data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class><h4>SOLUTION</h4><p>I designed a dashboard that is personalized to each user, displaying their activity with <span class="highlight">actionable items using customizable widgets.</span>The goal was to transform this page into a 'hub' for the most important information while also driving product adoption</p></li>
          <li data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class><h4>PROCESS</h4><p>
          Research → Wireframing → Mockups → User Testing → Implementation
          </p></li>
        </ul>
      </div>
        </div>
        <div class="FeedbackHeader">
          <h2>Tested with real users</h2>
        </div>
      <div class="feedback">
        <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class ="uber">
          <img src={require('../images/uber-logo.png')}/>
          <p>Engineering Leadership Sourcer</p>
        </div>
        <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="40" data-aos-duration="500" data-aos-easing="ease-in-out" class ="surveymonkey">
          <img src={require('../images/surveymonkey-logo.png')}/>
          <p>Technical Sourcer</p>
        </div>
      </div>
      <div class ="before">
        <h2>Original Homepage</h2>
        <img data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out"class src={require('../images/entelo-old-homepage.jpg')}/>
      </div>
      <div class="questions">
      <img src={require('../images/animat-lightbulb.gif')}/>
      <div data-aos="fade-up" data-aos-offset="50" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out"><h2>How can we help recruiters stay organized and informed while sourcing candidates?</h2>
      <h2>↓</h2>
      </div>
      </div>
      <div class="wireframes">
        <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="20" data-aos-duration="300" data-aos-easing="ease-in-out">Wireframe</h2>
        <img data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="400" data-aos-easing="ease-in-out" class src={require('../images/homepage-wireframe.png')}/>
      </div>
    <div class ="ProjectShowcase">
      <div class ="entelo-sticky">
        <h2>Final Product</h2>
      </div>
      <div class="scroll">
        <h4>Suggested Candidates</h4>
        <p>Suggestions offer users the ability to discover new candidates they might not see in a regular search by surfacing profiles related to candidates they've taken action on.</p>
        <img src={require('../images/entelo-browser-suggestions.jpg')}/>
        <h4>Projects</h4>
        <p>Projects are a major part of a recruiter's workflow on Entelo. This widget gives users a quick snapshot of their active projects, with a blue dot to indicate which ones need attention.</p>
        <img src={require('../images/entelo-browser-projects.jpg')}/>
        <h4>Messaging</h4>
        <p>Users love tracking their engagement on messages sent to candidates, so I bundled the most important stats and activity regarding their messaging to display on the homepage.</p>
        <img src={require('../images/entelo-browser-messaging.jpg')}/>
        <h4>Activity</h4>
        <p>For some familiarity to the old homepage, I kept an activity feed on the page to show users how other people on their team are currently using Entelo.</p>
        <img src={require('../images/entelo-browser-activity.jpg')}/>
        <h4>Achievements</h4>
        <p>Gamification encourages users to be more active on the platform. To spark this productivity, I decided to display the user's latest badge along with their progress towards the next one. </p>
        <img src={require('../images/entelo-browser-achievements.jpg')}/>
        <h4>Searches</h4>
        <p>Some space was preserved to display the user's saved/ recent searches. </p>
        <img src={require('../images/entelo-browser-searches.jpg')}/>
      </div>
    </div>
    <div class="mockup">
      <img src={require('../images/entelo-mockup.jpg')}/>
    </div>
    <div class="project-nav">
    <div class ="previous-project">
    <Link to="/design"><Nav
    title="← Back"
    subtitle="All Projects"
    image={require('../images/all-projects.png')}
  /></Link>
    </div>
    <div class ="next-project">
    <Link to="/classhook"><Nav
    title="Next Up →"
    subtitle="ClassHook Redesign"
    image={require('../images/classhook-cover.jpg')}
  /></Link>
    </div>
    </div>
  </Layout>
)

export default Entelo
