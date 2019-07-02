import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Mentors = () => (
  <Layout>
    <SEO title="Mentorship" />
    <div class="MentorHeader">
    </div>
    <div class="mentor-description">
      <div class="animation">
        <img src={require('../images/mentor-animation.gif')}/>
      </div>
      <div class="mentor-list">
        <ul>
          <li><h4>BACKGROUND</h4><p>I created this quick prototype as a way to practice my skills with animation and interaction design. I designed the app in Sketch, then used Anima Toolkit and Principle to create an animated prototype of the swipe interaction. 👈</p></li>
          <li><h4>PROBLEM</h4><p>As a young professional, I'm always looking for ways to improve my skills. To this day, I haven't found a solid solution for finding a mentor in my field without having a ton of connections in the industry.</p></li>
          <li><h4>SOLUTION</h4><p>This design creates a place for people like me to find the perfect mentor. I used the swiping motion, a common gesture in mobile UI design, to move from one profile to the next. The idea here was to use this familiar motion, but disassociate it from the notion of swiping left to "pass" or right to "match". The result: a vertical swipe.</p></li>
          <li><h4>PROCESS</h4><p>
          Ideation → Mockups → Prototyping
          </p></li>
        </ul>
      </div>
        </div>
    <div class="footer">
      <img src={require('../images/mentor-footer.jpg')}/>
    </div>
  </Layout>
)

export default Mentors
