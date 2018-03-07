import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import SetupSidebar from '../Components/SetupSidebar';
require('../containers/App/App.css');

const BankInformation = () => (
  <Container left={<SetupSidebar active="4" />}>
    <SectionWithHeading heading="Bank Information">
      <ContentContainer>
        <div>
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
        </div>
        <Row>
          <Col md={12}><FooterButtons centered save="black" /></Col>
        </Row>
      </ContentContainer>
    </SectionWithHeading>
  </Container>
)

export default BankInformation;