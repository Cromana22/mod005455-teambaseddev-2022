import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AccountPage() {
    return (
        <div id="accountPage">
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <p>My Details</p>
                        <p>My Subscriptions</p>
                    </Col>
                    <Col>
                        <div id="myDetails">
                            <p>Name: FROM DATABASE GOES HERE</p>
                            <p>Address Line 1: FROM DATABASE GOES HERE</p>
                            <p>Address Line 2: FROM DATABASE GOES HERE</p>
                            <p>Town: FROM DATABASE GOES HERE</p>
                            <p>County: FROM DATABASE GOES HERE</p>
                            <p>Postcode: FROM DATABASE GOES HERE</p>
                            <p>Email: FROM DATABASE GOES HERE</p>
                        </div>
                        <hr />
                        <div id="subscriptionDetails">
                            <p>Subscription Type: FROM DATABASE TYPE (COURSE NAME IF EXISTS)</p>
                            <p>Subscribed Since: FROM DATABASE GOES HERE</p>
                            <p>Monthly Price: £FROM DATABASE GOES HERE</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AccountPage;