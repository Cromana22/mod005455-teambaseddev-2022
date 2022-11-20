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
                            <Card.Title className="center">Welcome</Card.Title>
                            <Card.Text className="justify">
                            Learn For Fun is an environment aimed at beginners. If you want a simple game to unwind or kill some time, this is the place for you. If you want to dip your proverbial toes into developing some games, this also is a good place for you. If you're just browsing aimlessly, this is still a good place to hang out.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="thirds">
                    <Card style={{ width: '20rem' }} className="homeCards">
                        <Card.Body>
                            <Card.Title className="center">Learn For Fun</Card.Title>
                            <Card.Text className="justify">
                                The team curated a selection of classic games to get you started, we hope you find this selection pleasing, we have more on the pipeline, please look forward to the new additions. If the selection is not to your liking, please feel free to suggest other genres, feedback is always welcomed and appreciated.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="thirds">
                    <Card style={{ width: '20rem' }} className="homeCards">
                        <Card.Body>
                            <Card.Title className="center">The Team</Card.Title>
                            <Card.Text className="justify">
                                This is a project part of UCP Level 6 Computing and Information Systems module, all the contributors are students, ages ranging from the early-twenties to mid-forties, a mixture of nationalities and an eclectic mix of skills and abilities. The Team Based Development cohort is grateful for your patronage.   
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