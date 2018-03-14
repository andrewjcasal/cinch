import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
require('../containers/App/App.css');

const LegalRepresentative = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="1" pageType="setup" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Legal Representative">
          <ContentContainer type="Setup" left={
            <div>
              <Row>
                <Col md={12}><input type="text" placeholder="Name" /></Col>
              </Row>
              <Row>
                <Col md={12}><input type="text" placeholder="Address" /></Col>
              </Row>
              <Row>
                <Col md={4}><input type="text" placeholder="City" /></Col>
                <Col md={4}><Dropdown title="State" options={["male","female"]}/></Col>
                <Col md={4}><input type="text" placeholder="Zip" /></Col>
              </Row>
              <Row>
                <Col md={4}><input type="text" placeholder="Phone Number" /></Col>
                <Col md={8}><input type="text" placeholder="Email" /></Col>
              </Row>
              <Row>
                <Col md={4}><input type="text" placeholder="Social Security #" /></Col>
              </Row>
            </div>
          }>
            <Row>
              <Col md={12}><FooterButtons centered save="black" /></Col>
            </Row>
          </ContentContainer>
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default LegalRepresentative;