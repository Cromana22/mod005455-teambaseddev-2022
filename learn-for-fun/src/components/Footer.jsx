import React from "react";
import './Footer.css';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <footer className="text-center text-light">

      <div className="links">
        <Button href="https://www.facebook.com">Facebook</Button>
        <Button href="https://www.instagram.com">Instagram</Button>
        <Button href="https://twitter.com">Twitter</Button>
        <Button href="https://www.youtube.com">YouTube</Button>
      </div>

      <h6 className="text-dark">© 2022 Copyright: Learn4Fun</h6>

    </footer>
  )
}

export default Footer;