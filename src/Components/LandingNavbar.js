import React from 'react';
import Button from '../Components/UI/Button/Button';
import {Row, Col} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import Hamburger from '../assets/images/landing-hamburger.png';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
require('./LandingNavbar.css');

const LandingNavbar = (props) => (
  <div className="landing-navbar">
    <div className="detail-container">
      <a href="#" className="navbar-left">
        <img src={Hamburger} />
      </a>
      <img className="navbar-logo" src={Logo} />
      <div className="navbar-right">
        <a href="#" className="join-button">Join</a>
        <a href="#" className="">Login</a>
      </div>
    </div>
  </div>
)

export default LandingNavbar;