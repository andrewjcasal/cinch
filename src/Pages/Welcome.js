import React from 'react';
import Container from '../Layouts/Container';
import ProgramSteps from '../Components/ProgramSteps';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Layouts/ContentContainer';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
require('../App.css');

const Welcome = () => (
  <Container>
    <ProgramSteps completed="5" />
    <SectionWithHeading heading="Email">
      <ContentContainer type="programs" top={
        <Row>
          <Col md={12}><p className="subheading">Registration Email</p></Col>
        </Row>
      } left={
        <div>
          <Row>
            <Col md={12}><input type="text" placeholder="Email Subject" /></Col>
          </Row>
          <Row>
            <Col md={12}><Wysiwyg /></Col>
          </Row>
        </div>
      } right = {
        <div>
          <Row>
            <Col md={12}><input type="text" placeholder="Sending Email Address" /></Col>
          </Row>
          <Row>
            <Col md={12}><input type="text" placeholder="Send Registration Confirmation to" /></Col>
          </Row>
        </div>
      } />
      <ContentContainer type="programs" top={
        <Row>
          <Col md={12}><p className="subheading">Registration Email</p></Col>
        </Row>
      } left={
        <div>
          <Row>
            <Col md={12}><input type="text" placeholder="Email Subject" /></Col>
          </Row>
          <Row>
            <Col md={12}><Wysiwyg /></Col>
          </Row>
        </div>
      }>
        <FooterButtons cancel next />
      </ContentContainer>
    </SectionWithHeading>
  </Container>
)

export default Welcome;