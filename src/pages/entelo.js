import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


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
          <li><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li>
          <li><h4>PROBLEM</h4><p>This page is the first thing the user sees when they log on to Entelo. The old homepage was cluttered with irrelevant information, making it useless to the user. It gave no guideance on how to use the product, resulting in low feature usage. </p></li>
          <li><h4>SOLUTION</h4><p>I designed a dashboard that is personalized to each user, displaying their activity with actionable items using customizable widgets. The goal was to transform this page into a 'hub' for the most important information while also driving product adoption</p></li>
          <li><h4>PROCESS</h4><p>
          Research → Wireframing → Mockups → User Testing → Implementation
          </p></li>
        </ul>
      </div>
        </div>
      <div class ="before">
        <h2>Original Homepage</h2>
        <img src={require('../images/entelo-old-homepage.jpg')}/>
      </div>
      <div class="wireframes">
        <h2>Wireframe</h2>
        <img src={require('../images/homepage-wireframe.png')}/>
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
        <p>Gamification encourages users to be more active on the platform. To spark this productivity, decided to display the user's latest badge, along with their progress towards the next one. </p>
        <img src={require('../images/entelo-browser-achievements.jpg')}/>
        <h4>Searches</h4>
        <p>Some space was preserved to display the user's saved/ recent searches. </p>
        <img src={require('../images/entelo-browser-searches.jpg')}/>
      </div>
    </div>
    <div class="mockup">
      <img src={require('../images/entelo-mockup.jpg')}/>
    </div>
  </Layout>
)

export default Entelo
