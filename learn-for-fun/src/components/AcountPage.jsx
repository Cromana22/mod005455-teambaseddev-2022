import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ShowDetails() {
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.add("d-none");
}

function ShowSubscription() {
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.remove("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.add("d-none");
}

function ShowPaymentDetails() {
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
}

function AccountPage() {
    return (
        <div id="accountPage">
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <button onClick={ShowDetails}>My Details</button>
                        <br />
                        <button onClick={ShowSubscription}>My Subscriptions</button>
                        <br />
                        <button onClick={ShowPaymentDetails}>My PaymentDetails</button>
                    </Col>
                    <Col>
                        <div id="myDetails" className="">
                            <p>Name: FROM DATABASE GOES HERE</p>
                            <p>Address Line 1: FROM DATABASE GOES HERE</p>
                            <p>Address Line 2: FROM DATABASE GOES HERE</p>
                            <p>Town: FROM DATABASE GOES HERE</p>
                            <p>County: FROM DATABASE GOES HERE</p>
                            <p>Postcode: FROM DATABASE GOES HERE</p>
                            <p>Email: FROM DATABASE GOES HERE</p>
                        </div>
                        <div id="subscriptionDetails" className="d-none">
                            <p>Subscription Type: FROM DATABASE TYPE (COURSE NAME IF EXISTS)</p>
                            <p>Subscribed Since: FROM DATABASE GOES HERE</p>
                            <p>Monthly Price: £FROM DATABASE GOES HERE</p>
                        </div>
                        <div id="paymentDetails" className="d-none">
                            <p>Reference Number: FROM DATABASE TYPE (COURSE NAME IF EXISTS)</p>
                            <p>Secure Code: FROM DATABASE GOES HERE</p>
                            <p>Account Code: £FROM DATABASE GOES HERE</p>
                            <p>Holder Name: £FROM DATABASE GOES HERE</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AccountPage;