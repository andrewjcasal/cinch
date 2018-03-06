import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
require('../containers/App/App.css');

const Buttons = () => (
  <Container>
    <ProgramSteps completed="6" />
    <SectionWithHeading heading="Registration Buttons">
      <ContentContainer type="Programs">
        <Row>
          <Col md={6}><p className="subheading">Select Button</p></Col>
          <Col md={6}><p className="subheading">Select Code Below</p></Col>
        </Row>
        <Row>
          <Col md={6}>
            <ul>
              <li class="large-button">
                <input type="radio" /> <a class="logo-reg-button" href="#">REGISTER WITH CINCH SPORTS</a>
              </li>
              <li class="small-button">
                <input type="radio" /> <a class="logo-reg-button" href="#">REGISTER</a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <div class="gray-border"></div>
          </Col>
        </Row>
        <FooterButtons cancel next />
      </ContentContainer>
    </SectionWithHeading>
  </Container>
)

export default Buttons;