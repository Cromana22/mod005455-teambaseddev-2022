import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomePage() {
    return (
        <div className="home">
            <NavBar />

            <div>
                test
                <Link to="/course">Course</Link>
            </div>

            <Footer />
        </div>
    )
}
export default HomePage;