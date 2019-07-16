/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./header"
import "./layout.css"

<script>
   AOS.init();
 </script>

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Header />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Designed and developed by
            {` `}
            <a href="https://www.linkedin.com/in/kate-butterfield/">me</a>
          </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
