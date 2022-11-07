import React from "react";
import {Card} from 'react-bootstrap';
import "../css/GameListPage.css";

function GameCard(props) {

    const { name, image, descript, cardId } = props;
  
    return (
        <Card className="gameCards col s12 m3" >
            <a href={"/games/"+cardId}>
                <Card.Body >
                    <Card.Img variant="top" src={image} />
                    <Card.Title className="center">{name}</Card.Title>
                    <Card.Text className="justify">
                        {descript}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}    

export default GameCard;