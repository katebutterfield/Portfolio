import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import { Link } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ClassHook = () => (
  <Layout>
    <SEO title="ClassHook" />
    <div class="ClassHookHeader">
    <img src={require('../images/classhook-logo.svg')}/>
    <p>Educational clips for teachers (Web App)</p>
    </div>
    <div class="description">
    <div class="classhook-context">
    <div class="classhook-context-left">
      <ul>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>ROLE</h4><p>Design Contractor</p></li></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>BACKGROUND</h4><p>ClassHook is a platform that uses the ‘popular media’ pedagogy to help teachers engage their students. Educators use the site to discover short clips from popular TV shows and movies, such as Friends or The Big Bang Theory, that relate to a particular subject. They can also create playlists, add pause prompts (embedded quizzes), and post discussion questions to further the experience.</p></li></ScrollAnimation>
        </ul>
        </div>
        <div class="classhook-context-right">
          <ul>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>June - July 2019 <br/>
            4 week deadline
            </p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TEAM</h4>
            <p>2 Co-Founders <br/>
            1 Engineer (Founder)
            </p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TOOLS</h4><p>Sketch, InVision</p></li></ScrollAnimation>
            </ul>
            </div>
        </div>
        </div>

        <div class ="before">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true" offset="180"><h4>Original ClassHook Homepage</h4></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/classhook-original-homepage.jpg')}/></ScrollAnimation>
        </div>
        <div class ="before">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true" offset="180"><h4>Original ClassHook Sign-Up Page</h4></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/classhook-onboarding-before.jpg')}/></ScrollAnimation>
        </div>

      <div class="description">
      <div class="classhook-list">
        <ul>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROBLEM</h4><p>The original site was an MVP version using Bootstrap 3, and needed a major UX/UI refresh. <span class="classhook-highlight">The old experience created friction within the onboarding experience that prevented users from signing up and resulted in low feature engagement.</span> For example, playlists (a main product feature) were only viewed by users about 110 times in 2 months.</p></li></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>GOALS</h4><p>The main goals for this redesign were to <span class="classhook-highlight">increase engagement, encourage Premium purchases, and increase sign up rates.</span><ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/classhook-goals.png')}/></ScrollAnimation></p></li></ScrollAnimation>
          </ul>
          </div>
          <div class="ch-questions">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-pencil.gif')}/></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Educators are not always the most tech-savvy people.
          <br/>
          <br/>
          How can I design an interface that showcases all product features, while maintaining an intuitive experience for an educator?
          </h2>
          <h2>↓</h2>
          </div></ScrollAnimation>
          </div>
          <div class="classhook-list">
            <ul>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>SOLUTION</h4><p>
            I tackled the redesign in phases, going through my design process for each page or element that I was assigned. There are a few overarching themes across these pages that I used to address the core problem.
            </p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h5>Discovery:</h5><p> I studied other video platforms like YouTube and Netflix to evaluate their video discovery techniques. According to <a href="https://creatoracademy.youtube.com/page/lesson/discovery#strategies-zippy-link-3" target="_blank">YouTube Creator Academy</a>, <span class="classhook-highlight">"Studies of YouTube consumption have shown that viewers tend to watch a lot more when they get recommendations from a variety of channels." </span> I treated suggested or related clips with high priority throughout the site, with the intention of helping users find the content they need and maximizing their engagement with the platform.</p></li></ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h5>Dynamic Page Layout:</h5><p>Prior to my redesign, everything on ClassHook was displayed within one single container on the page - There was little visual hierarchy. To combat this<span class="classhook-highlight">I created separate containers for different components on the page and organized them in a way that follows the natural pattern of the eye.</span>
            </p></li></ScrollAnimation>
            </ul>
            </div>
            </div>
            <div class="ch-before-after">
              <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
              <div class="ch-before">
              <h5>Before</h5>
              <img class src={require('../images/classhook-clipview-before.jpg')}/>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
              <div class="ch-after">
              <h5>After</h5>
              <img class src={require('../images/classhook-clipview-after.jpg')}/>
              </div>
              </ScrollAnimation>
            </div>
            <div class="description">
            <div class="classhook-list">
              <ul>
            <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li><h4>PROCESS</h4><p>
            Consultation → Ideation → Mockups → Design Reviews → Iteration → Implementation
            </p></li></ScrollAnimation>
        </ul>
      </div>
      </div>

      <div class="flowchart">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>New Onboarding Flowchart</h4></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/classhook-onboarding-flowchart.jpg')}/></ScrollAnimation>
      </div>

        <div class="AlexFeedbackHeader">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h2>A note from the founder</h2></ScrollAnimation>
        </div>
      <div class="alex-feedback">
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true"><div class ="alex-card">
          <img src={require('../images/alex-profile.jpeg')}/>
          <h4>Alex Deeb</h4>
          <h5>Co-Founder, CEO</h5>
          <p>"Before starting any work, Kate asked questions to understand the project and the requirements. During our conversation, it was evident that she has a strong understanding of UI/UX design and the design process. Once the project began, it felt like a collaborative effort, which I appreciated. Kate was highly communicative and was always available to answer any questions. Although I felt we had aggressive design deadlines, Kate met them all without any issues. I don't understand how she works so quickly without sacrificing quality! We made changes to the requirements at several points during the project, but Kate adapted her designs seamlessly to fit them."</p>
        </div></ScrollAnimation>
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
