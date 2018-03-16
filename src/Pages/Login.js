import React from 'react';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Button from '../Components/UI/Button/Button'
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import {Row, Col} from 'react-bootstrap';
import FieldGroup from '../Components/UI/FieldGroup/FieldGroup';

        // <Row bsClass=".login-form-box">
        //   <Col md={12}>
        //     <input type="text" placeholder="Your Email Address" />
        //   </Col>
        // </Row>
        // <Row bsClass=".login-form-box">
        //   <Col md={12}>
        //     <input type="text" placeholder="Password" />
        //   </Col>
        // </Row>
require('./Login.css');

const login = () => (
  <div className="login-container">
    <div className="login-header">Login</div>
    <ContentContainer type="Login">
      <div>
        <form action="#">
          <FieldGroup
            id="login-email"
            type="login-form-box"
            label="E-mail"
            placeholder="Enter email"
            size="large"
          />
          <FieldGroup 
            id="login-password" 
            label="Password" 
            type="login-form-box"
            placeholder="Password"
            size="large"
          />
          <Col md={12}>
            <Row className="btn-row">
              <Row>
                <Button clicked={console.log('hi')} btnType="Cinch">Login</Button>
              </Row>
              <Row>
                <Button clicked={console.log('hi')} btnType="Facebook">Sign In with Facebook</Button>
              </Row>
              <Row>
                <Button clicked={console.log('hi')} btnType="Google">Sign In with Google</Button>
              </Row>
            </Row>
          </Col>
        </form>
      </div>
    </ContentContainer>
 </div>
);

export default login;