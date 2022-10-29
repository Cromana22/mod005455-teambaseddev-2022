import React from "react";
import HomeCarousel from "./carousel";
import NavBar from "./NavBar"
import "../css/HomePage.css"

function HomePage() {
    return (
        <div className="home">
            <NavBar />

            <div className="bannerContainer">
                <img src={require("../images/video-game-banner.jpg")} className="bannerImage"/>
            </div>

            <div className="container section">
                <HomeCarousel />
            </div>

            <div className="container section">
                Who am i
            </div>
        </div>
    )
}
export default HomePage;