import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/kate-logo-svg.svg')} width="30"/></Link>
      <Link to="/design">Design</Link>
      <Link to="/about">About</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Contact Me</button></Link>
    </div> 
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
