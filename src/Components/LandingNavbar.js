import React from 'react';
import Button from '../Components/UI/Button/Button';
import {Row, Col} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
require('./LandingNavbar.css');

const LandingNavbar = (props) => (
  <div className="landing-navbar">
    <img src={Logo} />
  </div>
)

export default LandingNavbar;