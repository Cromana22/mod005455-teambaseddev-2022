import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
import Footer from "./Footer";

function Subscription() {
    return (

        <div id="subscribtion">

            <NavBar></NavBar>


            <div className="row">
                <div className="col-1">

                </div>

                <div className="col-10">
                    <div className="row border-bottom border-dark">

                        <div className="fw-bold fs-2 text-center p-2">Subscription</div>
                    </div>
                    <div className="col-6" />


                    <div className="row p-5">
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }} className="mx-auto text-center">
                                <Card.Body>
                                    <Card.Text>One Game</Card.Text>
                                    <Card.Title>£12</Card.Title>
                                    <Card.Text>What this subscription include:
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">

                                        <Dropdown className='text-center'>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Choose Game</Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>Action Games</Dropdown.Item>
                                                <Dropdown.Item>Adventure Games</Dropdown.Item>
                                                <Dropdown.Item>Another Games</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <ListGroup.Item>Community Support</ListGroup.Item>
                                        <ListGroup.Item>Email Support</ListGroup.Item>
                                    </ListGroup>
                                    <Button>Subscribe</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">

                            <Card style={{ width: '18rem' }} className="mx-auto text-center">
                                <Card.Body>
                                    <Card.Text>Multiple Games</Card.Text>
                                    <Card.Title>£30</Card.Title>
                                    <Card.Text>What this subscription include:
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">

                                        <Dropdown className='text-center'>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Choose Game</Dropdown.Toggle>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Choose Game</Dropdown.Toggle>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Choose Game</Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>Action Games</Dropdown.Item>
                                                <Dropdown.Item>Adventure Games</Dropdown.Item>
                                                <Dropdown.Item>Another Games</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <ListGroup.Item>Community & Email Support</ListGroup.Item>
                                        <ListGroup.Item>Team Packages</ListGroup.Item>
                                        <ListGroup.Item>Team Dashboard</ListGroup.Item>
                                    </ListGroup>
                                    <Button>Subscribe</Button>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-md-4">
                            <Card style={{ width: '18rem' }} className="mx-auto text-center">
                                <Card.Body>
                                    <Card.Text>Unlimited Access</Card.Text>
                                    <Card.Title>£79</Card.Title>
                                    <Card.Text>What this subscription include:
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Unlimited Projects & Updates</ListGroup.Item>
                                        <ListGroup.Item>Community & Email Support</ListGroup.Item>
                                        <ListGroup.Item>Team Packages</ListGroup.Item>
                                        <ListGroup.Item>Team Dashboard</ListGroup.Item>
                                        <ListGroup.Item>Custom Permissions</ListGroup.Item>
                                        <ListGroup.Item>Dedicated Account Managment</ListGroup.Item>
                                        <ListGroup.Item>Unlimited Access To All Games</ListGroup.Item>
                                        <ListGroup.Item>Custom Infrastructure</ListGroup.Item>
                                    </ListGroup>
                                    <Button>Subscribe</Button>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>


                <div className="col-1">

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Subscription;