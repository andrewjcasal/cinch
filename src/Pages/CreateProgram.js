import React from 'react';
import Container from '../Components/Container';
import ProgramSteps from '../Components/ProgramSteps';
import DragFile from '../Components/DragFile';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Components/ContentContainer';
import Dropdown from '../Components/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import Datepicker from '../Components/Datepicker';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');
require('../Components/Table.css');
require('./Family.css');

const CreateProgram = () => (
  <div id="CreateProgram">
    <Container>
      <ProgramSteps completed="1" />
      <SectionWithHeading heading="Description">
        <ContentContainer left={
          <div>
          <div className="row">
            <div className="col-md-12">
              <input type="text" placeholder="Program Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Dropdown title="Sport" />
            </div>
            <div className="col-md-3">
              <Dropdown title="Type" />
            </div>
            <div className="col-md-6">
              <Dropdown title="Affiliation" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Datepicker placeholder="Registration Open Date/Time" includeTime/>
            </div>
            <div className="col-md-3">
              <Datepicker placeholder="Event Start" />
            </div>
            <div className="col-md-3">
              <Dropdown title="Payment Plan" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Datepicker placeholder="Registration Close Date/Time" includeTime/>
            </div>
            <div className="col-md-3">
              <Datepicker placeholder="Event End" />
            </div>
            <div className="col-md-3">
              <Dropdown title="Registration Fee" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <Wysiwyg />
            </div>
          </div>
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