import React from "react"
import './Project.css'

const Project = props => (
    <div className="Project">
        <img src={props.image} />
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        <p>{props.text}</p>
    </div>
)

export default Project
