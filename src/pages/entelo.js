import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Nav from '../components/nav';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Entelo = () => (
  <Layout>
    <SEO title="Entelo" />
    <div class="EnteloHeader">
    <img src={require('../images/entelo-logo.svg')}/>
    <p>Recruiting Automation Platform (Web App)</p>
    </div>
      <div class="entelo-context">
      <div class="entelo-context-left">
        <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>BACKGROUND</h4><p>Entelo is a multifaceted platform that plays a part in the daily workflow of recruiters at over 500 organizations. We offer a variety of features to help users find and engage with the best candidates. In conjunction, these features enable users to improve and automate the sourcing process.</p></li></ScrollAnimation>
          </ul>
          </div>
          <div class="entelo-context-right">
            <ul>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>Started Jan 2019 <br/>
              Refined June 2019
              </p></li></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TEAM</h4>
              <p>2 Product Managers <br/>
              3-4 Engineers
              </p></li></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TOOLS</h4><p>Sketch, InVision</p></li></ScrollAnimation>
              </ul>
              </div>
          </div>
          <div class ="before">
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true" offset="180"><h4>Original Homepage</h4></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/entelo-old-homepage.jpg')}/></ScrollAnimation>
            <div class="pulsating-circle-3"></div>
            <div class="image-notes-3"><h5>No personalized info ↓</h5></div>
          </div>
          <div class="entelo-list">
          <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PROBLEM</h4><p>As ‘they’ say, you never get a second chance to make a first impression - The homepage is the first thing a user sees when to log on to Entelo. <span class="highlight">The original page was cluttered with irrelevant information about teammate activity, making it impractical for users and impeding their access to important features.</span> Additionally, it gave no guidance on how to use the product, resulting in low feature usage. So the question became…</p></li></ScrollAnimation>
          </ul>
          </div>
          <div class="questions">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-lightbulb.gif')}/></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>How can I help recruiters stay organized and informed while sourcing candidates?</h2>
          <h2>↓</h2>
          </div></ScrollAnimation>
          </div>
          <div class="entelo-list">
          <ul>
          <li class><ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>SOLUTION</h4><p>
          I decided to approach the problem with 3 main solutions: Personalization, visual hierarchy, and persuasive design.</p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Personalization:</h5><p> <span class="highlight">Display elements that are unique to the user</span>, such as their individual projects and stats regarding user activity. This tackles the relevance issue in the original design.</p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Visual Hierarchy:</h5><p>Following atomic design methodology - I decided to break each section into a separate card/widget to create a dashboard comprised of only important information. Based on user research, the <span class="highlight">most used features are conveniently placed at the top of the page.</span>
          </p></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h5>Persuasive Design:</h5><p><span class="highlight">Nudging the user towards taking action on certain features</span> results in increased feature adoption - I did this by using small notification dots and empty states that show the users what they're missing.
          </p></ScrollAnimation></li>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PROCESS</h4><p>
          Research → Wireframing → Mockups → User Testing → Implementation
          </p></li></ScrollAnimation>
        </ul>
      </div>
      <div class="wireframes">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>Wireframe</h4></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/homepage-wireframe.png')}/></ScrollAnimation>
      </div>
      <div class="es-before-after">
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
        <div class="es-before">
        <h5>1st Iteration</h5>
        <img class src={require('../images/entelo-iteration-1.jpg')}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
        <div class="es-after">
        <h5>2nd Iteration</h5>
        <img class src={require('../images/entelo-iteration-2.jpg')}/>
        <div class="pulsating-circle-4"></div>
        <div class="image-notes-4"><h5>Even columns,
        <br/>most valuable <br/>features
        <br/>at the top →</h5></div>
        </div>
        </ScrollAnimation>
      </div>
        <div class="FeedbackHeader">
          <h2>Tested with real users</h2>
        </div>
      <div class="feedback">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><div class ="uber">
          <img src={require('../images/uber-logo.png')}/>
          <p>Engineering Leadership Sourcer</p>
        </div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div class ="surveymonkey">
          <img src={require('../images/surveymonkey-logo.png')}/>
          <p>Technical Sourcer</p>
        </div></ScrollAnimation>
      </div>

      <div class="entelo-list">
      <ul>
      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>USER FEEDBACK AND REFINED FEATURES</h4><p>Our insightful users told us <span class="highlight">they loved the redesign, but had a few things to add.</span> They didn't find the activity widget useful, and would love to see that real estate filled with reporting, or maybe Envoy (AI automated sourcing). They questioned the 'suggested candidates' at first, but were intruiged once the intention was further explained.</p>
      <h5>Overall, positive feedback 👍</h5>
      </li></ScrollAnimation>
      </ul>
      </div>

      <div class="questions">
      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-customize.gif')}/></ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>After a bit of refactoring, I came up with the final, high fidelity mocks</h2>
      <h2>↓</h2>
      </div></ScrollAnimation>
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
        <p>Some space was preserved to display the user's saved/ recent searches. When talking to users, I determined that they like having the option to access this from the homepage. </p>
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
