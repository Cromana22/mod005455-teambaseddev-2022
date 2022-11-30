import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaymentDetails from "./PaymentDetails";
import { render } from "react-dom";
import axios from "axios";

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


class AccountPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subData: [],
            userData: [],
            paymentData: []

        }
    }


    componentDidMount() {
        //get data from database
        axios.get('http://localhost/myAccountUser.php').then(res1 => {
            this.setState({ userData: res1.data });
            axios.get('http://localhost/myAccountSub.php').then(res2 => {
                this.setState({ subData: res2.data });
                axios.get('http://localhost/myAccountPayment.php').then(res3 => {
                    this.setState({ paymentData: res3.data });
                });
            });
        });

    }
    render() {
        return (
            <div id="accountPage">
                <NavBar />

                <div className="row">

                    <div className="col-1">
                    </div>

                    <div className="col-10">
                        <div className="row">

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
                                            {this.state.userData.map((result) => {
                                                return (
                                                    <div id="myDetails" className="">
                                                        <p>Name: {result.firstName} {result.lastName}</p>
                                                        <p>Address Line 1: {result.address1}</p>
                                                        <p>Address Line 2: {result.address2}</p>
                                                        <p>City: {result.city}</p>
                                                        <p>County: {result.county}</p>
                                                        <p>Postcode: {result.postcode}</p>
                                                        <p>Email: {result.email}</p>
                                                    </div>
                                                )
                                            })}

                                            {this.state.subData.map((result) => {
                                                return (
                                                    <div id="subscriptionDetails" className="d-none">
                                                        <p>Subscription Type: {result.subscriptionTypeName}</p>
                                                        <p>Subscribed Since: {result.dateRaised}</p>
                                                        <p>Monthly Price: £{result.price}</p>
                                                    </div>
                                                )
                                            })}

                                            {this.state.paymentData.map((result) => {
                                                return (
                                                    <div id="paymentDetails" className="d-none">
                                                        <p>Card Number: {result.cardNumber}</p>
                                                        <p>Card Type: {result.cardType}</p>
                                                        <p>Expiry Date: {result.expirationDate}</p>
                                                        <p>Holder Name: {result.cardHolderName}</p>
                                                        <button onClick={ShowAddPaymentDetails}>
                                                            Add New
                                                        </button>
                                                    </div>
                                                )
                                            })}
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
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default AccountPage;