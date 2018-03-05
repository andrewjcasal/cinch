import React from 'react';
import Container from '../Layouts/Container';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Layouts/ContentContainer';
import DragFile from '../Components/DragFile';
import Dropdown from '../Components/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import SetupSidebar from '../Components/SetupSidebar';
require('../App.css');

const ProofOfId = () => (
  <Container left={<SetupSidebar active="3" />}>
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
  </Container>
)

export default ProofOfId;