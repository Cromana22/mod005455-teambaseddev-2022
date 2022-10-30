import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomeCarousel from "./carousel";
import {Button, Card} from 'react-bootstrap';
import "../css/HomePage.css";

function HomePage() {
    return (
        <div className="home">
            <NavBar />

            <div className="bannerContainer">
                <img src={require("../images/video-game-banner.jpg")} className="bannerImage"/>
            </div>

            <div className="container section">
                <HomeCarousel />
            </div>

            <div className="container section endSection">
                <div className="thirds">
                    <Card style={{ width: '20rem' }} className="homeCards">
                        <Card.Body>
                            <Card.Title className="center">Card Title</Card.Title>
                            <Card.Text className="justify">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="thirds">
                    <Card style={{ width: '20rem' }} className="homeCards">
                        <Card.Body>
                            <Card.Title className="center">Card Title</Card.Title>
                            <Card.Text className="justify">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="thirds">
                    <Card style={{ width: '20rem' }} className="homeCards">
                        <Card.Body>
                            <Card.Title className="center">Card Title</Card.Title>
                            <Card.Text className="justify">
                                Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="center section">
                    <Link to="/register">
                        <Button variant="primary">Subscribe</Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage;