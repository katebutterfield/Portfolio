import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import { Link } from "gatsby"

const ClassHook = () => (
  <Layout>
    <SEO title="ClassHook" />
    <div class="ClassHookHeader">
    <img src={require('../images/classhook-logo.svg')}/>
    <p>Educational clips for teachers (Web App)</p>
    </div>
    <div class="description">
      <div class="classhook-list">
        <ul>
          <li><h4>ROLE</h4><p>Design Contractor - I was brought on the ClassHook team to transform the product in 4 weeks.</p></li>
          <li><h4>PROBLEM</h4><p>ClassHook offers a variety of features to help teachers find and organize clips including playlists, bookmarks, pause prompts, and more. Due to discoverability and usability issues, users weren't taking advantage of these features, resulting in a lack of activity for about 80% of the site's functionality. For example playlists (a main product feature) were only viewed by users about 110 times in 2 months.</p></li>
          <li><h4>SOLUTION</h4><p>The goal of this redesign was to increase feature activity and grow the number of monthly active users. To meet this goal, I increased discoverability of all features and emphasized personalization by adding recommended clips throughout the site. By doing this, ClassHook is able to nudge teachers towards clips that are relevant to them while also giving them the freedom to browse clips and discover their own.</p></li>
          <li><h4>PROCESS</h4><p>
          Consultation → Ideation → Mockups → Design Reviews → Iteration → Implementation
          </p></li>
        </ul>
      </div>
        </div>
        <div class="AlexFeedbackHeader">
          <h2>A note from the founder</h2>
        </div>
      <div class="alex-feedback">
        <div class ="alex-card">
          <img src={require('../images/alex-profile.jpeg')}/>
          <h4>Alex Deeb</h4>
          <h5>Co-Founder, CEO</h5>
          <p>"Before starting any work, Kate asked questions to understand the project and the requirements. During our conversation, it was evident that she has a strong understanding of UI/UX design and the design process. Once the project began, it felt like a collaborative effort, which I appreciated. Kate was highly communicative and was always available to answer any questions. Although I felt we had aggressive design deadlines, Kate met them all without any issues. I don't understand how she works so quickly without sacrificing quality! We made changes to the requirements at several points during the project, but Kate adapted her designs seamlessly to fit them."</p>
        </div>
      </div>
    <div class ="ProjectShowcase">
      <div class ="classhook-sticky">
        <h2>Final Product</h2>
      </div>
      <div class="scroll">
        <h4>Homepage</h4>
        <p>I designed the ClassHook homepage to emulate a landing page that guides the user towards creating an account using multiple CTA's. The page is informative, yet also offers the ability to test out the product functionality by running a search or browsing clips. The user is limited to viewing a max of 5 clips before creating an account.</p>
        <img src={require('../images/classhook-homepage.jpg')}/>
        <h4>Dashboard</h4>
        <p>This dashboard is now the main hub for a ClassHook user to see all of their clips and activity. Educators can access all of their saved playlists, bookmarked clips, and more on their personal dashboard. Research shows that users often come to the site without an idea for a clip in mind, so I added recommended clips based on their school information to simplify the browsing experience.</p>
        <img src={require('../images/classhook-dashboard.jpg')}/>
        <h4>User Profile</h4>
        <p>This page displays all of the user's information regarding their school and creates a place for them to edit this info, change preferences, etc. I decided to add a bit of reporting to the page, which gives the user a snapshot of their activity and encourages them to use the product more.</p>
        <img src={require('../images/classhook-profile.jpg')}/>
        <h4>Browse Clips</h4>
        <p>Research shows educators often use ClassHook without any idea what they're looking for. They like to browse clips in order to spark inspiration for videos they might want to use. To make this browsing experience easy, I added a fixed filter component on the sidebar so users can refine criteria as they scroll. Each category displays 5 of the most popular clips, with the option to view more within that topic.</p>
        <img src={require('../images/classhook-browse.jpg')}/>
        <h4>View Clips</h4>
        <p>I redesigned the clip viewing experience to focus on the media player. The page previously displayed an overload of information. To combat this, I incorporated a tab system that allows the user to manage additional elements without leaving the page. Data shows one of the most used components on the site is related clips, so I decided to show this section parallel to the media player to make it more accessible.</p>
        <img src={require('../images/classhook-view-clip.jpg')}/>
        <h4>Onboarding</h4>
        <p>I reconfigured the ClassHook sign-up process by breaking it into steps that were easily digestible for the user. I started by mapping out the entire onboarding flow on a flowchart, then creating separate mockups for each step.</p>
        <img src={require('../images/classhook-onboarding-flowchart.jpg')}/>
        <img src={require('../images/classhook-signup.jpg')}/>
        <h5>Want to see more from this project?   <a href="mailto:katebutterfield.design@gmail.com">          Request full InVision Link</a></h5>

      </div>
    </div>
    <div class="footer">
      <img src={require('../images/classhook-footer.jpg')}/>
    </div>
    <div class="project-nav">
    <div class ="previous-project">
    <Link to="/entelo"><Nav
    title="← Back"
    subtitle="Entelo Homepage"
    image={require('../images/entelo-cover.jpg')}
  /></Link>
    </div>
    <div class ="next-project">
    <Link to="/employstream"><Nav
    title="Next Up →"
    subtitle="EmployStream Forms"
    image={require('../images/es-cover.jpg')}
  /></Link>
    </div>
    </div>
  </Layout>
)

export default ClassHook
