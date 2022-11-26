import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { redirect, useParams } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Subscription() {
    const navigate = useNavigate();
    const courseId = useParams();
    const [courseName, setCourseName] = useState("");
    const resetUrl = '..../'+window.location.href.replace("/subscribe", "");
    const url = 'http://localhost/getCourse.php?course='+courseId.courseID;

    function SingleSubsription() {
        const url2 = 'http://localhost/subscribe.php/?typeId=1&courseId='+courseId.courseID;

        axios.get(url2, {withCredentials: true}).then(res => {
            if (res.data == 'success') {
                alert("Thank you for subscribing!");
                navigate(resetUrl);
            }
            else {
                alert("Subscription Failed. Please ensure you are logged in.");
            }
        });
    };

    function AllAccessSubscription() {
        const url2 = 'http://localhost/subscribe.php?typeId=2';

        axios.get(url2, {withCredentials: true}).then(res => {
            console.log(res);
        });
    };

    axios.get(url).then(res => {
        setCourseName(res.data[0].courseName);
        console.log(res.data[0].courseName)
    });

    return (
        <div id="subscribtion">

            <NavBar></NavBar>

            <div className="row">
                <div className="col-1">

                </div>

                <div className="col-10">
                    <div className="row border-bottom border-dark">

                        <div className="fs-2 text-center p-2">Subscribe to: <strong>{courseName}</strong></div>
                    </div>
                    <div className="col-6" />


                    <div className="row p-5">
                        <div className="col-md-3"></div>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="mx-auto text-center">
                                <Card.Body>
                                    <Card.Text className="success">One Course</Card.Text>
                                    <Card.Title>£12</Card.Title>
                                    <Card.Text>What this subscription includes:
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Access to Specified Course</ListGroup.Item>
                                        <ListGroup.Item>Community Support</ListGroup.Item>
                                        <ListGroup.Item>Unlimited Access To All Games</ListGroup.Item>
                                    </ListGroup>
                                    <Button onClick={SingleSubsription}>Subscribe</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="mx-auto text-center">
                                <Card.Body>
                                    <Card.Text className="success">Unlimited Access</Card.Text>
                                    <Card.Title>£79</Card.Title>
                                    <Card.Text>What this subscription includes:
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Unlimited Access to Courses</ListGroup.Item>
                                        <ListGroup.Item>Community & Email Support</ListGroup.Item>
                                        <ListGroup.Item>Dedicated Account Managment</ListGroup.Item>
                                        <ListGroup.Item>Unlimited Access To All Games</ListGroup.Item>
                                    </ListGroup>
                                    <Button onClick={AllAccessSubscription}>Subscribe</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3"></div>
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