
import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./searchBarNav.js";

function NavBar() {
    return (
        
        <div style={{ overflow: "hidden" }}>
            
            <div className="row bg-light">
                <div className="col-1 p-0">

                </div>
                <div className="col-10 p-0">
                    <Navbar bg="light" expand="lg">
                        <Container fluid style={{ padding: '0' }}>
                            <Navbar.Brand href="#"><Link to='./'><img src="LOGO99.png" alt="Learn4Fun logo" width={150} /></Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="/" className="text-center">Home</Nav.Link>

                                    <Nav.Link href="./Courses" className="text-center">Courses</Nav.Link>



                                </Nav>
                                <SearchBar />
                                <Nav
                                    className="my-2 my-lg-0 text-center d-flex"
                                    style={{ maxHeight: '100px', minWidth: '120px' }}
                                    navbarScroll
                                >
                                    <Container fluid className="justify-content-center">
                                        <Nav.Link href="login" className="align-items-center text-center" style={{ verticalAlign: 'middle' }}>
                                            <i class="bi bi-person-circle mx-auto fs-5" style={{ width: "inherit" }}></i>
                                            <div className="">
                                                Sign in
                                            </div>
                                        </Nav.Link>
                                    </Container>


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