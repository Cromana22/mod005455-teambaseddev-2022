import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PaymentDetails from "./PaymentDetails";
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

function saveCardDetails() {
    const data = [{}];
    console.log(data);
    axios.post('http://localhost/AddCard.php', data, { withCredentials: true })
    .then(res => {

    });
}

class AccountPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: [{
                "email": "",
                "userID": "",
                "password": "",
                "firstName": "",
                "lastName": "",
                "address1": "",
                "address2": "",
                "city": "",
                "county": "",
                "postcode": ""
            }],
            subData: [{
                "subscriptionID": "",
                "userID": "",
                "dateRaised": "",
                "SubscriptionTypeId": "",
                "courseID": "",
                "subscriptionTypeID": "",
                "subscriptionTypeName": "",
                "price": ""
            }],
            paymentData: [{
                "cardName": "",
                "cardNumber": "",
                "expiry": "",
                "cvv": "",
                "userID": 1
            }],
            cookieEmail: " "    
        }
    }

    componentDidMount() {

        axios.get('http://localhost/getcookies.php', {withCredentials: true}).then(res => {
            this.setState({ cookieEmail: res.data.email });

            //get data from database
            const data = { email: this.state.cookieEmail };
            axios.post('http://localhost/myAccountUser.php', data)
            .then(res1 => {
                this.setState({ userData: res1.data });

                axios.post('http://localhost/myAccountSub.php', data)
                .then(res2 => {
                    this.setState({ subData: res2.data });

                    axios.post('http://localhost/myAccountPayment.php', data)
                    .then(res3 => {
                        this.setState({ paymentData: res3.data });
                    });
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

                            <div className="section pb-4 endSection">
                                <Container fluid>
                                    <Row >
                                        <Col>
                                            <button onClick={ShowDetails}>My Details</button>
                                            <br />
                                            <button onClick={ShowSubscription}>My Subscriptions</button>
                                            <br />
                                            <button onClick={ShowPaymentDetails}>My Payment Details</button>
                                        </Col>

                                        <Col xs={9}>
                                            {this.state.userData.map((result) => {
                                                return (

                                                    <div key={result.firstName} id="myDetails" className="border rounded p-3">
                                                        
                                                        <div className="fw-bold fs-5">
                                                            Name
                                                        </div>

                                                        <div className="d-flex py-2">
                                                            <input className="rounded" type="text"
                                                                defaultValue={result.firstName} placeholder="First name"></input>
                                                            <div className="px-4"></div>
                                                            <input className="rounded" type="text" defaultValue={result.lastName}
                                                                placeholder="Last name"></input>
                                                        </div>

                                                        <div className="py-2 d-flex">
                                                            <div className="fs-5 fw-bold">Address Line 1</div>
                                                            <div className="px-5"></div>
                                                            <div className="fs-5 fw-bold">Address Line 2</div>
                                                        </div>

                                                        <div className="py-2 d-flex">
                                                            <input className="rounded" type="text" placeholder="Address 1" defaultValue={result.address1}></input>
                                                            <div className="px-4"></div>
                                                            <input className="rounded" type="text" placeholder="Address 2" defaultValue={result.address2}></input>
                                                        </div>

                                                        <div className="py-2">
                                                            <div className="fs-5 fw-bold">City</div>
                                                            <input className="rounded" type="text" placeholder="City" defaultValue={result.city}></input>
                                                        </div>

                                                        <div className="py-2">
                                                            <div className="fs-5 fw-bold">County</div>
                                                            <input className="rounded" type="text" placeholder="County" defaultValue={result.county}></input>
                                                        </div>

                                                        <div className="py-2">
                                                            <div className="fs-5 fw-bold">Postcode</div>
                                                            <input className="rounded" type="text" placeholder="Postcode" defaultValue={result.postcode}></input>
                                                        </div>
                                                        <div className="py-2">
                                                            <div className="fs-5 fw-bold">Email address</div>
                                                            <input className="rounded" type="text" placeholder="Email address" defaultValue={result.email}></input>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            <div id="subscriptionDetails" className="d-none">
                                                {this.state.subData.map((result) => {
                                                    return (
                                                        <div key={result.subscriptionID} className="">
                                                            <p>Subscription Type: {result.subscriptionTypeName}</p>
                                                            <p>Subscribed Since: {result.dateRaised}</p>
                                                            <p>Monthly Price: £{result.price}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div id="paymentDetails" className="d-none">
                                                { this.state.paymentData.map((result) => {
                                                    return (
                                                        <div key={result.userID}>
                                                            <p>Holder Name: {result.cardName}</p>
                                                            <p>Card Number: {result.cardNumber}</p>
                                                            <p>Expiry Date: {result.expiry}</p>
                                                            <p>CVV: {result.cvv}</p>
                                                        </div>
                                                    )
                                                })}
                                                <button onClick={ShowAddPaymentDetails}>
                                                    Add New
                                                </button>
                                            </div>

                                            <div id="addPaymentDetails" className="d-none">
                                                <PaymentDetails />
                                                <button onClick={saveCardDetails}>
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