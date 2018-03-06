import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import DragFile from '../Components/DragFile/DragFile';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
import SetupSidebar from '../Components/SetupSidebar';
require('../containers/App/App.css');

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