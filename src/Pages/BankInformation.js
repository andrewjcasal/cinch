import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
require('../containers/App/App.css');

const BankInformation = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="3" pageType="setup" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Bank Information">
          <ContentContainer>
            <Col md={12}>
              <Row>
                <Col md={6}><input type="text" placeholder="Bank Name" /></Col>
                <Col md={6}><input type="text" placeholder="Account Type" /></Col>
              </Row>
              <Row>
                <Col md={6}><input type="text" placeholder="Routing Number" /></Col>
                <Col md={6}><input type="text" placeholder="Account Number" /></Col>
              </Row>
              <Row>
                <Col md={6}><input type="text" placeholder="Repeat Routing Number" /></Col>
                <Col md={6}><input type="text" placeholder="Repeat Account Number" /></Col>
              </Row>
            </Col>
          </ContentContainer>
            <Row>
              <Col md={12}><FooterButtons centered save="black" /></Col>
            </Row>
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default BankInformation;