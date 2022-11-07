import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import GameCard from "./GameCard";
import "../css/GameListPage.css";
import gamesData from "../json/games.json";

function GameListPage() {

    let gameslist = [];

    gamesData.forEach(game =>
    {
        gameslist.push(
            <GameCard key={game.id} name={game.name} image={game.image} descript={game.description} link={game.link} />
        );
    })

    return (
        <div className="gamelist">
            <NavBar />

            <div className="container endSection cardlist row">
                {gameslist}
            </div>

            <Footer />
        </div>
    )
}

export default GameListPage;