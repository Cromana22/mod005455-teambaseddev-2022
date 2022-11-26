import React from "react";
import {Card} from 'react-bootstrap';
import "../css/GameCard.css";

function GameCard(props) {

    const { name, image, descript, cardId, subState } = props;

    let link = "";
    if (subState == true) {
        link = "/games/"+cardId;
    }
    else {
        link = "#";
    };
  
    return (
        <Card className="gameCards col s12 m3" >
            <a href={link}>
                <Card.Body >
                    {
                        subState == false
                        && <div className="overlay"><p>Subscribe to Access!</p></div>
                    }
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