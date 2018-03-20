import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Twitter from '../../assets/images/twitter.png';
import Facebook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Tumblr from '../../assets/images/tumblr.png';
import Button from '../../Components/UI/Button/Button';
require("../../assets/stylesheets/bootstrap4.min.css");
require('./Footer.css');

const Footer = () => (
  <div className="footer">
    <Row>
      <Col md={8}>
        <Row>
          <Col md={3}>
            <span>CINCH SPORTS</span>
            <a href="#">About Cinch</a>
            <a href="#">Cinch Blog</a>
            <a href="#">Cinch Store</a>
            <a href="#">Developers</a>
          </Col>
          <Col md={3}>
            <span>HELP</span>
            <a href="#">Help Center</a>
            <a href="#">Video School</a>
            <a href="#">FAQ</a>
            <a href="#">Forums</a>
          </Col>
          <Col md={3}>
            <span>MORE</span>
            <a href="#">Partners</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Donate</a>
            <a href="#">Cinch Sportswear</a>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <Row className="follow">
          <span>FOLLOW US</span>
          <div>
            <a href="#">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={Google} alt="Google Plus" />
            </a>
            <a href="#">
              <img src={Tumblr} alt="Tumblr" />
            </a>
          </div>
        </Row>
        <Row>
          <form className="newsletter">
            <span>SUBSCRIBE</span>
            <div className="input-group">
              <input type="email" id="subscribe" placeholder="Enter Your Email" />
              <div style={{width: 231 + "px"}}><Button btnType="black">SIGN UP</Button></div>
            </div>
          </form>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Footer;