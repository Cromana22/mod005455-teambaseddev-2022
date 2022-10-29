import React from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "./carousel";

function HomePage() {
    return (
        <div className="home">
            test
            <Link to="/course">Course</Link>
            <div>
                <HomeCarousel />
            </div>
        </div>
    )
}
export default HomePage;