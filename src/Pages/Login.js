import React from 'react';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Button from '../Components/UI/Button/Button'
import LabeledInput from "../Components/UI/LabeledInput/LabeledInput";
import {Row, Col} from 'react-bootstrap';
import OrgLogo from '../assets/images/arsenal-large.png';
import Logo from '../assets/images/cinch-large.png';
require('./Login.css');

const login = () => (
  <Row className="login">
    <Col md={5}>
      <Row>
        <Col md={12}><h2>Login</h2></Col>
      </Row>
      <div className="bordered-container">
        <div className="image-container">
          <img src={Logo} />
          <span style={{fontSize: 30 + "px"}}>+</span>
          <img src={OrgLogo} />
        </div>
        <Row>
          <Col md={12}><LabeledInput type="E-mail" placeholder="Your E-mail Address" /></Col>
        </Row>
        <Row>
          <Col md={12}><LabeledInput type="Password" placeholder="Your Password" /></Col>
        </Row>
        <Row style={{marginTop: 20 + "px"}}>
          <Col md={12}><Button clicked={console.log('hi')} btnType="black">Create My Account</Button></Col>
        </Row>
        <Row>
          <Col md={12}><Button clicked={console.log('hi')} btnType="Facebook"><span></span>Sign In with Facebook</Button></Col>
        </Row>
        <Row>
          <Col md={12}><Button clicked={console.log('hi')} btnType="Google"><span></span>Sign In with Google</Button></Col>
        </Row>
      </div>
      <span className="register-instead">Dont have a Cinch Account? <a href="/register">Create an Account</a></span>
    </Col>
  </Row>
);

export default login;