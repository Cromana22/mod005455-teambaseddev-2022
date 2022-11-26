import { React, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import GameCard from "./GameCard";
import gamesData from "../json/games.json";
import axios from "axios";

function GameListPage() {

    const [subState, setSubState] = useState(false);
    const [gamesList, setGamesList] = useState([]);

    //get subscriptions from database
    axios.get('http://localhost/getSubscriptions.php', {withCredentials: true}).then(res => {
        const subscriptions = res.data;

        if (subscriptions.length > 0) {
            setSubState(true);
        };

        let tempGamesList = [];
        gamesData.forEach(game =>
        {
            tempGamesList.push(
                <GameCard key={game.id} name={game.name} image={game.image} descript={game.description} cardId={game.id} subState={subState} />
            );
        });

        setGamesList(tempGamesList);
    });



    return (
        <div className="gamelist">
            <NavBar />

            <div className="container endSection cardlist row">
                {gamesList}
            </div>

            <Footer />
        </div>
    )
}

export default GameListPage;