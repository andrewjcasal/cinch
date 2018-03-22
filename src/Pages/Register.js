import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Button from '../Components/UI/Button/Button';
import LabeledInput from "../Components/UI/LabeledInput/LabeledInput";
require('./Login.css');

const Register = () => (
  <Row className="login">
    <Col md={5}>
    <Row>
      <Col md={12}><h2>Create Your Account</h2></Col>
    </Row>
    <Row>
      <Col md={6}><LabeledInput type="First Name" placeholder="Your First Name" /></Col>
      <Col md={6}><LabeledInput type="Last Name" placeholder="Your Last Name" /></Col>
    </Row>
    <Row>
      <Col md={6}><LabeledInput type="Email" placeholder="Your First Name" /></Col>
      <Col md={6}><LabeledInput type="Password" placeholder="Your Last Name" /></Col>
    </Row>
    <Row>
      <Col md={12}><LabeledInput type="Address" placeholder="Your First Name" /></Col>
    </Row>
    <Row>
      <Col md={6}><LabeledInput type="City" placeholder="Your First Name" /></Col>
      <Col md={6}><LabeledInput type="Zip" placeholder="Your Last Name" /></Col>
    </Row>
    <Row>
      <Col md={6}><LabeledInput type="State" placeholder="Your First Name" /></Col>
      <Col md={6}><LabeledInput dropdown type="Country" placeholder="Your Last Name" /></Col>
    </Row>
    <Row>
      <Col md={12}>
        <input type="checkbox" /><p>I Agree with <a href="#">Terms and Conditions</a></p>
      </Col>
    </Row>
    <Row>
      <Col md={12}><Button clicked={console.log('hi')} btnType="black">Create My Account</Button></Col>
    </Row>
    <Row>
      <Col md={6}><Button clicked={console.log('hi')} btnType="Facebook"><span></span>Sign In with Facebook</Button></Col>
      <Col md={6}><Button clicked={console.log('hi')} btnType="Google"><span></span>Sign In with Google</Button></Col>
    </Row>
    </Col>
  </Row> )

export default Register;