import { React, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/NavBar.css";
import SearchBar from "./searchBarNav.jsx";
import axios from "axios";
import Button from 'react-bootstrap/Button';

function NavBar() {

    const [cookieEmail, setCookieEmail] = useState("");
    const [cookieLoggedIn, setCookieLoggedIn] = useState("N");

    axios.get('http://localhost/getcookies.php', {withCredentials: true}).then(res => {
        setCookieEmail(res.data.email);
        setCookieLoggedIn(res.data.loggedin);
    });

    function logout() {
        axios.get('http://localhost/logout.php', {withCredentials: true}).then(res => {
            setCookieEmail("");
            setCookieLoggedIn("");
        });
    }

    return (
        
        <div style={{ overflow: "hidden" }}>
            
            <div className="row bg-light">
                <div className="col-1 p-0">

                </div>
                <div className="col-10 p-0">
                    <Navbar bg="light" expand="lg">
                        <Container fluid style={{ padding: '0' }}>
                            <Navbar.Brand>
                                <Link to='../'><img src="LOGO99.png" alt="Learn4Fun logo" width={150} /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="/" className="text-center">Home</Nav.Link>

                                    <Nav.Link href="/courses" className="text-center">Courses</Nav.Link>

                                    <Nav.Link href="/games" className="text-center">Games</Nav.Link>

                                </Nav>

                                <SearchBar />
                                
                                <Nav
                                    className="my-2 my-lg-0 text-center d-flex rightside"
                                    style={{ maxHeight: '100px', minWidth: '120px'}}
                                    navbarScroll
                                >
                                    {
                                        cookieLoggedIn == 'Y'
                                        && <Container style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Container fluid className="justify-content-center">
                                                <Nav.Link href="/myaccount" className="align-items-center text-center" style={{  verticalAlign: 'middle' }}>
                                                    <i className="bi bi-person-circle mx-auto fs-5" style={{ width: "inherit" }}></i>
                                                    <div className="nowrap">
                                                        My Account
                                                    </div>
                                                </Nav.Link>
                                            </Container>
                                            <Button 
                                                style={{ height: 'max-content', marginTop: '15px' }} 
                                                onClick={logout}
                                            >
                                                Logout
                                            </Button>
                                        </Container>
                                    }
                                    {
                                        cookieLoggedIn == '' &&
                                        <Container fluid className="justify-content-center">
                                            <Nav.Link href="login" className="align-items-center text-center" style={{ verticalAlign: 'middle' }}>
                                                <i className="bi bi-person-circle mx-auto fs-5" style={{ width: "inherit" }}></i>
                                                <div className="nowrap">
                                                    Sign in
                                                </div>
                                            </Nav.Link>
                                        </Container>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="col-1 p-0">

                </div>
            </div>
        </div>
    )
}


export default NavBar