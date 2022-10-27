import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home">
            test
            <Link to="/courses">Courses</Link>
        </div>
    )
}
export default HomePage;