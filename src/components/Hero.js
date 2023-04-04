import React from "react"
import PhotoGrid from "../components/img/photo-grid.png"

function Hero() {
    return (
        <section>
            <img src={PhotoGrid} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;