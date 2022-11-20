import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Carousel.css";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item className='carouselItem'>
        <img
          src={require("../images/games.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Most Popular Game</h3>
          <p>Classic Pac is our most popular game. No matter what age, everyone enjoys it. </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carouselItem'>
        <img
          src={require("../images/fate-game.webp")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Recently added</h3>
          <p>Hidden Spots - Castles is the game we have added recently, and it's been popular among teenagers.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carouselItem'>
        <img
          src={require("../images/neon-game.webp")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Popular among children</h3>
          <p>Pinball is a game that kids have been enjoying lately.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;