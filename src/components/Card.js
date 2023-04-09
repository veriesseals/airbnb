import React from "react"
import Katie from "../components/img/katie-zaferes.png"
import Star from "../components/img/star.png"


function Card(props) {
    return (
        <div className="card">
            <img src={Katie} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 </span> / person</p>
        </div>
    )
}

export default Card;