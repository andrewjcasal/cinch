import React from 'react';
import Container from '../Layouts/Container';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Layouts/ContentContainer';
import Dropdown from '../Components/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import SetupSidebar from '../Components/SetupSidebar';
require('../App.css');

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