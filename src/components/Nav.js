import React from "react"
import './Nav.css'

const Nav = props => (
    <div className="Nav">
        <img src={props.image} />
        <div>
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        </div>
    </div>
)

export default Nav
