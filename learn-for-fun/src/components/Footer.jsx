import React from "react";
import '../css/Footer.css';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <footer className="text-center text-light">
      <div className="row">

        <div className="col-1">
        </div>

        <div className="col-10">
          <div className="row">
            <div className="row border-top border-dark">

              <div className="links">
                <Button href="https://www.facebook.com">Facebook</Button>
                <Button href="https://www.instagram.com">Instagram</Button>
                <Button href="https://twitter.com">Twitter</Button>
                <Button href="https://www.youtube.com">YouTube</Button>
              </div>

              <h6 className="text-dark">© 2022 Copyright: Learn4Fun</h6>
            </div>
          </div>
        </div>
        <div className="col-1">

        </div>
      </div>
    </footer>
  )
}

export default Footer;