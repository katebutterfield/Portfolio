import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'


class Header extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    hasScrolled: false
  }
}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/kate-logo-svg.svg')} width="30"/></Link>
          <Link to="/design">Case Studies</Link>
          <Link to="/about">About</Link>
          <a href="mailto:katebutterfield.design@gmail.com">Contact Me <span class="wave">👋</span></a>
        </div>
      </div>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
