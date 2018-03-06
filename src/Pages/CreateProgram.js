import React from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import DragFile from '../Components/DragFile/DragFile';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import Datepicker from '../Components/Datepicker';
import {Row, Col} from 'react-bootstrap';
require('../Components/Table.css');
require('./Family.css');

const CreateProgram = () => (
  <div id="CreateProgram">
    <Container>
      <ProgramSteps completed="1" />
      <SectionWithHeading heading="Description">
        <ContentContainer left={
          <div>
            <Row>
              <Col md={12}><input type="text" placeholder="Program Name" /></Col>
            </Row>
            <Row>
              <Col md={3}><Dropdown title="Sport" /></Col>
              <Col md={3}><Dropdown title="Type" /></Col>
              <Col md={6}><Dropdown title="Affiliation" /></Col>
            </Row>
            <Row>
              <Col md={6}><Datepicker placeholder="Registration Open Date/Time" includeTime/></Col>
              <Col md={3}><Datepicker placeholder="Event Start" /></Col>
              <Col md={3}><Dropdown title="Payment Plan" /></Col>
            </Row>
            <Row>
              <Col md={6}><Datepicker placeholder="Registration Close Date/Time" includeTime/></Col>
              <Col md={3}><Datepicker placeholder="Event End" /></Col>
              <Col md={3}><Dropdown title="Registration Fee" /></Col>
            </Row>
            <Row>
              <Col md={12}><Wysiwyg /></Col>
            </Row>
          </div>
        } right= {
          <div>
            <DragFile label="Program Logo" />
            <DragFile label="Program Photo" />
          </div>
        }>
          <FooterButtons cancel next />
        </ ContentContainer>
      </SectionWithHeading>
    </Container>
  </div>
)

export default CreateProgram;