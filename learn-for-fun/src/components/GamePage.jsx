import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Ratio from 'react-bootstrap/Ratio';
import { useParams } from 'react-router';
import gamesData from "../json/games.json";
import "../css/GamePage.css";

function GamePage() {

    let gameId = useParams();
    let game = gamesData.find(item => item.id === gameId.id);

    return (
        <div className="game">
            <NavBar />

            <div className="container endSection" id="gamehere">
                <Ratio aspectRatio="16x9">
                    <iframe src={game.link} />
                </Ratio>
            </div>

            <Footer />
        </div>
    )
}

export default GamePage;