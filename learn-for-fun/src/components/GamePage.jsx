import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Ratio from 'react-bootstrap/Ratio';
import "../css/GamePage.css";

function GamePage() {
    return (
        <div className="game">
            <NavBar />

            <div className="container endSection" id="gamehere">
                <Ratio aspectRatio="16x9">
                    <iframe src="https://cdn.htmlgames.com/StrongholdSolitaire/" />
                </Ratio>
            </div>

            <Footer />
        </div>
    )
}

export default GamePage;