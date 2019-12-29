import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Nav from '../components/nav';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const EnteloIQ = () => (
  <Layout>
    <SEO title="Entelo 2.0" />
    <div class="EnteloIQHeader">
    <img src={require('../images/enteloiq-logo.svg')}/>
    <p>Merging 2 Recruiting Automation Platforms</p>
    </div>
      <div class="enteloiq-context">
      <div class="enteloiq-context-left">
        <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>ROLE</h4><p>Lead Designer 👩🏻‍💻</p></li></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>BACKGROUND</h4><p>In August 2019, Entelo acquired ConveyIQ with the goal of creating an <span class="highlight">automated source-to-hire platform for recruiters.</span> Previously Entelo operated as a tool for recruiters to find and engage with passive candidates. With the addition of ConveyIQ functionality, we needed to build a product that combines both ends of the recruitment funnel. I led the charge to design this new combined product. </p></li></ScrollAnimation>
          </ul>
          </div>
          <div class="enteloiq-context-right">
            <ul>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>Market Research · Aug 2019 <br/>
              Design & Iteration · Sept - Dec 2019
              </p></li></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TEAM</h4>
              <p>2 Product Managers <br/>
              3-4 Engineers<br/>
              3 Product team leaders
              </p></li></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TOOLS</h4><p>Sketch, InVision, FullStory</p></li></ScrollAnimation>
              </ul>
              </div>
          </div>


          <div class="enteloiq-list">
          <ul>
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PROBLEM</h4><p>Recruiters often have to manage hundreds of candidates at a time.</p><ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/candidates.png')}/></ScrollAnimation>
          <p> Finding great candidates, managing communications, scheduling interviews, etc. is <span class="highlight">a daunting manual process.</span> Solutions exist, but none that allow the recruiter to manage the recruiting funnel from source through hire. </p></li></ScrollAnimation>
          </ul>
          </div>

          <div class="enteloiq-questions">
          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-search.gif')}/></ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Phase 1: Research</h2>
          </div></ScrollAnimation>
          </div>

          <div class="enteloiq-context">
          <div class="enteloiq-context-left">
            <ul>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>GOALS</h4><p>1. Define existing recruitment process (solutions, pain points)<br/>
              2. Determine user satisfaction<br/>
              3. Measure interest in end-to-end solution</p></li></ScrollAnimation>
              </ul>
              </div>
              <div class="enteloiq-context-right">
                <ul>
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>SAMPLE</h4><p>20 decision makers<br/>100+ users</p></li></ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>METHOD</h4><p>SurveyMonkey surveys, user research calls</p></li></ScrollAnimation>
                  </ul>
                  </div>
              </div>

              <div class="enteloiq-before-after">
                <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
                <div class="enteloiq-before">
                <img class src={require('../images/survey-1.png')}/>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
                <div class="enteloiq-after">
                <img class src={require('../images/survey-2.png')}/>
                </div>
                </ScrollAnimation>
              </div>

              <div class="enteloiq-list">
              <ul>
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>RESULTS</h4><p><span class="highlight"> 90% of sampled DM’s or users see value in having a centralized recruiting platform. 👍</span> Those who didn’t are larger organizations with internal tools & strict processes. The biggest pain points were:</p>
              <h5>Lack of automation </h5>
              <h5>Limitations with primary tool</h5>
              <h5>Lack of centralization (too many tools) </h5>
              </li></ScrollAnimation>
              </ul>
              </div>


              <div class="enteloiq-questions">
              <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-lightbulb.gif')}/></ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Phase 2: Design Sprint 🏃</h2>
              </div></ScrollAnimation>
              </div>



              <div class="enteloiq-context">
              <div class="enteloiq-context-left">
                <ul>
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>GOALS</h4><p>1. Define problems and ideate potential solutions<br/>
                  2. Gather different perspectives from participants<br/>
                  3. Use research to drive design decisions</p></li></ScrollAnimation>
                  </ul>
                  </div>
                  <div class="enteloiq-context-right">
                    <ul>
                      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>1 week</p></li></ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PARTICIPANTS</h4><p>10 stakeholders from various departments</p></li></ScrollAnimation>
                      </ul>
                      </div>
                  </div>

                  <div class="enteloiq-list">
                  <ul>
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>CHALLENGES</h4><p>We came up with a few challenges to kick things off:</p>
                  <h5>How might we help recruiters efficiently source directly for positions that are opened in the ATS?</h5>
                  <h5>How might we augment the ATS to help recruiters efficiently complete low-value tasks* from pre-apply all the way through hire and create one click to hire experience? </h5>
                  <h5>How might we give recruiters access to a unified talent pool that comes from multiple sources (ATS + Passive candidate sources)?</h5>
                  </li></ScrollAnimation>
                  </ul>
                  </div>



                  <div class="enteloiq-before-after">
                    <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
                    <div class="enteloiq-before">
                    <img class src={require('../images/enteloiq-wireframe-1.png')}/>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
                    <div class="enteloiq-after">
                    <img class src={require('../images/enteloiq-wireframe-2.png')}/>
                    </div>
                    </ScrollAnimation>
                    </div>

                    <div class="wireframes">
                      <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><img class src={require('../images/wireframe-3.png')}/></ScrollAnimation>
                    </div>


                  <div class="enteloiq-questions">
                    <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-pencil.gif')}/></ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Phase 3: Initial Mockups 🖋</h2>
                    </div></ScrollAnimation>
                  </div>


                  <div class="enteloiq-list">
                  <ul>
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PROCESS</h4><p>The fun part! I used the sketches and wireframes produced in our design sprint to come up with an initial set of mockups that represent the solutions we agreed upon.</p>
                  </li></ScrollAnimation>
                  </ul>
                  </div>

                  <div class="enteloiq-mockups">
                  <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true">
                  <div class="enteloiq-mock-1">
                  <img class src={require('../images/enteloiq-element-2.png')}/>
                  <div class="pulsating-circle-7"></div>
                  <div class="image-notes-7"><h5>Intelligent Insights on candidate profiles.</h5></div>
                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
                  <div class="enteloiq-mock-2">
                  <img class src={require('../images/enteloiq-element-1.png')}/>
                  <div class="pulsating-circle-8"></div>
                  <div class="image-notes-8"><h5>Suggestions for candidates to add to the pipeline.</h5></div>
                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
                  <div class="enteloiq-mock-3">
                  <img class src={require('../images/enteloiq-element-3.png')}/>
                  <div class="pulsating-circle-9"></div>
                  <div class="image-notes-9"><h5>Quick action buttons</h5></div>
                  </div>
                  </ScrollAnimation>
                  </div>

                  <div class="enteloiq-questions">
                    <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-customize.gif')}/></ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Phase 4: Feedback & Iteration Loop</h2>
                    </div></ScrollAnimation>
                  </div>


                  <div class="enteloiq-context">
                  <div class="enteloiq-context-left">
                    <ul>
                      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>GOALS</h4><p>1. Gather feedback from end users<br/>
                      2. Determine common bottlenecks with current designs<br/>
                      3. Prioritize and implement feedback</p></li></ScrollAnimation>
                      </ul>
                      </div>
                      <div class="enteloiq-context-right">
                        <ul>
                          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>TIMELINE</h4><p>1 week</p></li></ScrollAnimation>
                          <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>PARTICIPANTS</h4><p>20 users · 12 companies<br/>15 internal stakeholders</p></li></ScrollAnimation>
                          </ul>
                          </div>
                      </div>


        <div class="enteloiq-FeedbackHeader">
          <h2>Tested with real users</h2>
        </div>
      <div class="enteloiq-feedback">
        <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><div class ="uber">
          <img src={require('../images/uber-logo.png')}/>
          <p>Engineering Leadership Sourcer</p>
        </div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div class ="surveymonkey">
          <img src={require('../images/amazon-logo.png')}/>
          <p>Technical Sourcer</p>
        </div></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true"><div class ="creator">
          <img src={require('../images/surveymonkey-logo.png')}/>
          <p>Recruiting Team</p>
        </div></ScrollAnimation>
      </div>
      <div class="enteloiq-FeedbackFooter">
        <p>+ more!</p>
      </div>

      <div class="enteloiq-list">
      <ul>
      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><li class><h4>USER FEEDBACK AND REFINED FEATURES</h4><p>After reviewing the designs with users, we found that<span class="highlight">they were excited about the new product, but had very different plans for using it.</span>Workflows tend to vary across organizations, so I needed to strategically craft the interface in a way that would fit many different molds. Some questions still remained:</p>
      <h5>What if a recruiter doesn't know what position a candidate fits in to?</h5>
      <h5>How much automation is TOO much?</h5>
      </li></ScrollAnimation>
      </ul>
      </div>


      <div class="enteloiq-before-after">
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
        <div class="es-before">
        <h5>1st Iteration</h5>
        <img class src={require('../images/enteloiq-element-1.png')}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
        <div class="es-after">
        <h5>Final Iteration</h5>
        <img class src={require('../images/suggestions-iteration-2.png')}/>
        <div class="pulsating-circle-10"></div>
        <div class="image-notes-10"><h5>Even columns,
        <br/>most valuable <br/>features
        <br/>at the top →</h5></div>
        </div>
        </ScrollAnimation>
      </div>


      <div class="enteloiq-before-after">
        <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true">
        <div class="es-before">
        <h5>1st Iteration</h5>
        <img class src={require('../images/enteloiq-element-3.png')}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" animateOnce="true">
        <div class="es-after">
        <h5>Final Iteration</h5>
        <img class src={require('../images/interested-iteration-2.png')}/>
        <div class="pulsating-circle-4"></div>
        <div class="image-notes-4"><h5>Even columns,
        <br/>most valuable <br/>features
        <br/>at the top →</h5></div>
        </div>
        </ScrollAnimation>
      </div>



      <div class="enteloiq-questions">
      <ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><img src={require('../images/animat-checkmark.gif')}/></ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" duration=".8" animateOnce="true"><div><h2>Many design reviews and file versions later, I came up with a set of high fidelity mocks</h2>
      <h2>↓</h2>
      </div></ScrollAnimation>
      </div>

    <div class ="ProjectShowcase">
      <div class ="enteloiq-sticky">
        <h2>Final Product</h2>
      </div>
      <div class="scroll">
        <h4>Suggested Candidates</h4>
        <p>Suggestions offer the ability to discover candidates that our product intelligently recommends based on profiles that fit their job description. They can browse candidates here and either add them to the pipeline, or reject them.</p>
        <img src={require('../images/enteloiq-final-suggestions.jpg')}/>
        <h4>Candidate Pool</h4>
        <p>One of the biggest value props for this new product is its ability to pull candidates from multiple sources and allow recreuiters to manage them all in one place.</p>
        <img src={require('../images/entelo-browser-projects.jpg')}/>
        <h4>Messaging</h4>
        <p>Users love tracking their engagement on messages sent to candidates, so I bundled the most important stats and activity regarding their messaging to display on the homepage.</p>
        <img src={require('../images/entelo-browser-messaging.jpg')}/>
        <h4>Activity</h4>
        <p>After multiple iterations and rounds of testing, I came up with the final version of this widget, which displays a snippet of reporting for the user's activity within the last 30 days.</p>
        <img src={require('../images/entelo-browser-activity.jpg')}/>
        <h4>Achievements</h4>
        <p>Gamification encourages users to be more active on the platform. To spark this productivity, I decided to display the user's latest badge along with their progress towards the next one. </p>
        <img src={require('../images/entelo-browser-achievements.jpg')}/>
        <h4>Searches</h4>
        <p>When talking to users, I determined that they like having the option to access this from the homepage. They can use the dropdown menu at the top to switch between their saved and recent searches.</p>
        <img src={require('../images/entelo-browser-searches.jpg')}/>
      </div>
    </div>
    <div class="mockup">
      <div class="entelo-list">
      <ul>
        <li class><ScrollAnimation animateIn="fadeInUp" duration=".5" animateOnce="true"><h4>IMPLEMENTATION & KEY METRICS</h4><p>
        Due to changes in priorities, the Homepage was pushed back to a later date and is currently in development.
        Metrics I'll measure once it's released are - Engagement rates with Projects and Track Messaging, as well as number of achievements (via Mode).
        </p></ScrollAnimation></li>
        </ul>
        </div>
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

export default EnteloIQ
