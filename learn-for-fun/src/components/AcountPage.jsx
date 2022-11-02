import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Button, Card} from 'react-bootstrap';
import "../css/HomePage.css";

function AccountPage() {
    return (
        <div className="account">
            <NavBar />

            <div>
                Placeholder
            </div>

            <Footer />
        </div>
    )
}

export default AccountPage;