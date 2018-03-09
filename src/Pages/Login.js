import React from 'react';
import Aux from '../hoc/Aux/Aux';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Button from '../Components/UI/Button/Button'
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import {Row, Col} from 'react-bootstrap';

require('./Login.css');

const login = () => (
  <div className="login-container">
    <div className="login-header">Login</div>
    <ContentContainer type="Login">
      <div>
        <Row bsClass=".login-form-box">
          <Col md={12}>
            <input type="text" placeholder="Your Email Address" />
          </Col>
        </Row>
        <Row bsClass=".login-form-box">
          <Col md={12}>
            <input type="text" placeholder="Password" />
          </Col>
        </Row>
        <Button btnType="Cinch"></Button>
        <Button btnType="Facebook"></Button>
        <Button btnType="Google"></Button>
      </div>
    </ContentContainer>
 </div>
);

export default login;