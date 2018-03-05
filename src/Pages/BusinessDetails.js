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

const BusinessDetails = () => (
  <Container left={<SetupSidebar active="1" />}>
    <SectionWithHeading heading="Business Details">
      <ContentContainer type="Setup" left={
        <div>
          <Row>
            <Col md={12}><input type="text" placeholder="Organization Name" /></Col>
          </Row>
          <Row>
            <Col md={12}><input type="text" placeholder="YOURCLUB.cinchsports.com" /></Col>
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
            <Col md={4}><Dropdown title="Sport" options={["male","female"]}/></Col>
            <Col md={4}><Dropdown title="Affiliation" options={["male","female"]}/></Col>
            <Col md={4}><input type="text" placeholder="Federal Tax ID" /></Col>
          </Row>
          <Row>
            <Col md={12}><Wysiwyg /></Col>
          </Row>
        </div>
      } right={
        <DragFile label="Organization Logo" />
      }>
        <Row>
          <Col md={12}><FooterButtons centered save="black" /></Col>
        </Row>
      </ContentContainer>
    </SectionWithHeading>
  </Container>
)

export default BusinessDetails;