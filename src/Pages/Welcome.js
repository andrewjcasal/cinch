import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
require('../containers/App/App.css');

const Welcome = () => (
  <Container>
    <ProgramSteps completed="5" />
    <SectionWithHeading heading="Email">
      <ContentContainer type="Programs" top={
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
      <ContentContainer type="Programs" top={
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