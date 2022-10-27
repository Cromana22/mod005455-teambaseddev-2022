import React from "react"; 
import { Link } from "react-router-dom";
import Courses from './Courses';


const HomePage = () => {
    return ( 
        <div>
            <h1>Hello World</h1>
            <Link to ={{pathname:'./courses'}}>Courses</Link>
        </div>
    );
}
 
export default HomePage;