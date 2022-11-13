import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaymentDetails from "./PaymentDetails1";

function ShowDetails() {
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.add("d-none");
    const addPaymentDetails = document.getElementById("addPaymentDetails");
    addPaymentDetails.classList.add("d-none");
}

function ShowSubscription() {
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.remove("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.add("d-none");
    const addPaymentDetails = document.getElementById("addPaymentDetails");
    addPaymentDetails.classList.add("d-none");
}

function ShowPaymentDetails() {
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
    const addPaymentDetails = document.getElementById("addPaymentDetails");
    addPaymentDetails.classList.add("d-none");
}

function ShowAddPaymentDetails() {
    const addPaymentDetails = document.getElementById("addPaymentDetails");
    addPaymentDetails.classList.remove("d-none");
    const subscriptionDetails = document.getElementById("subscriptionDetails");
    subscriptionDetails.classList.add("d-none");
    const myDetails = document.getElementById("myDetails");
    myDetails.classList.add("d-none");
    const paymentDetails = document.getElementById("paymentDetails");
    paymentDetails.classList.add("d-none");
}

function AccountPage() {
    return (
        <div id="accountPage">
            <NavBar />

            <div className="section">
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
                                <p>Card Number: FROM DATABASE GOES HERE</p>
                                <p>Card Type: FROM DATABASE GOES HERE</p>
                                <p>Expiry Date: FROM DATABASE GOES HERE</p>
                                <p>Holder Name: FROM DATABASE GOES HERE</p>
                                <button onClick={ShowAddPaymentDetails}>
                                    Add New
                                </button>
                            </div>
                            <div id="addPaymentDetails" className="d-none">
                                <PaymentDetails />
                                <button onClick={ShowPaymentDetails}>
                                    Save
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default AccountPage;