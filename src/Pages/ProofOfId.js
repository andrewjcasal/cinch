import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import DragFile from '../Components/DragFile/DragFile';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
require('../containers/App/App.css');

const ProofOfId = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="2" pageType="setup" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Proof of ID">
          <ContentContainer type="DragFileTwoCol" top={
            <Row>
              <Col md={12}><p class="subheading centered">Upload any form of Government ID</p></Col>
            </Row>
          }left={
            <DragFile label="Front" />
          } right={
            <DragFile label="Back" />
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

export default ProofOfId;