import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Nav from '../components/nav'; // You can also use <link> for styles
// ..


const Entelo = () => (
  <Layout>
    <SEO title="Entelo" />
    <div class="EnteloHeader">
    <img src={require('../images/entelo-logo.svg')}/>
    <p>Recruiting Automation Platform (Web App)</p>
    </div>
      <div class="entelo-list">
        <ul>
          <li class><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li>
          <li class><h4>BACKGROUND</h4><p>Entelo is a multifaceted platform that plays a part in the daily workflow of recruiters at over 500 organizations. We offer a variety of features to help users find and engage with the best candidates. In conjunction, these features enable to improve and automate the sourcing process.</p></li>
          </ul>
          </div>
          <div class ="before">
            <h4>Original Homepage</h4>
            <img class src={require('../images/entelo-old-homepage.jpg')}/>
          </div>
          <div class="entelo-list">
          <ul>
          <li class><h4>PROBLEM</h4><p>As ‘they’ say, you never get a second chance to make a first impression - The homepage is the first thing a user sees when to log on to Entelo. <span class="highlight">The original page was cluttered with irrelevant information about teammate activity, making it impractical for users and impeding their access to important features.</span> Additionally, it gave no guidance on how to use the product, resulting in low feature usage. So the question became…</p></li>
          </ul>
          </div>
          <div class="questions">
          <img src={require('../images/animat-lightbulb.gif')}/>
          <div><h2>How can we help recruiters stay organized and informed while sourcing candidates?</h2>
          <h2>↓</h2>
          </div>
          </div>
          <div class="entelo-list">
          <ul>
          <li class><h4>SOLUTION</h4><p>
          I decided to approach the problem with 3 main solutions: Personalization, visual hierarchy, and persuasive design.</p>
          <h5>Personalization:</h5><p> Display elements that are unique to the user, such as their individual projects and stats regarding user activity. This tackles the relevance issue in the original design.</p>
          <h5>Visual Hierarchy:</h5><p>Following atomic design methodology - I decided to break each section into a separate card/widget to create a dashboard comprised of only important information. Based on user research, the most used features are conveniently placed at the top of the page.
          </p>
          <h5>Persuasive Design:</h5><p>Nudging the user towards taking action on certain features produces better feature adoption - I did this by using small notification dots and empty states that show the users what they're missing.
          </p></li>
          <li class><h4>PROCESS</h4><p>
          Research → Wireframing → Mockups → User Testing → Implementation
          </p></li>
        </ul>
      </div>
        <div class="FeedbackHeader">
          <h2>Tested with real users</h2>
        </div>
      <div class="feedback">
        <div class ="uber">
          <img src={require('../images/uber-logo.png')}/>
          <p>Engineering Leadership Sourcer</p>
        </div>
        <div class ="surveymonkey">
          <img src={require('../images/surveymonkey-logo.png')}/>
          <p>Technical Sourcer</p>
        </div>
      </div>
      <div class="wireframes">
        <h2>Wireframe</h2>
        <img class src={require('../images/homepage-wireframe.png')}/>
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
