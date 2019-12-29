import React from "react"
import './Card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
)

export default Card
