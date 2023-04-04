import React from "react"
import AirBNBLogo from "../components/img/airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img src={AirBNBLogo} className="logo"/>
        </nav>
    )
}

export default Navbar;