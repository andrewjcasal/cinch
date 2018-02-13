import React, { Component } from 'react';
import Container from '../Components/Container';
import ProgramSteps from '../Components/ProgramSteps';
import DragFile from '../Components/DragFile';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Components/ContentContainer';
import Dropdown from '../Components/Dropdown';
import Ellipses from '../assets/images/ellipses.png';
import Star from '../assets/images/star.png';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');
require('../Components/CinchTable.css');
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
            <div className="col-md-3">
              <input type="text" placeholder="Registration Open" className="datetimepicker" id='datetimepicker1' />
            </div>
            <div className="col-md-3">
              <input type="text" placeholder="Open Time" />
            </div>
            <div className="col-md-3">
              <input type="text" placeholder="Event Start" className="datetimepicker" id='datetimepicker2' />
            </div>
            <div className="col-md-3">
              <Dropdown title="Payment Plan" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <input type="text" placeholder="Registration Close" class="datetimepicker" id='datetimepicker3' />
            </div>
            <div className="col-md-3">
              <input type="text" placeholder="Close Time" />
            </div>
            <div className="col-md-3">
              <input type="text" placeholder="Event End" className="datetimepicker" id='datetimepicker4' />
            </div>
            <div className="col-md-3">
              <Dropdown title="Registration Fee" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="textarea">
                <textarea></textarea>
              </div>
            </div>
          </div>
          </div>
        } right= {
          <div>
            <DragFile label="Program Logo" />
            <DragFile label="Program Photo" />
          </div>
        } />
        <div class="footer-buttons">
          <button class="cancel-button">CANCEL</button>
          <button class="next-button">NEXT</button>
        </div>
      </SectionWithHeading>
    </Container>
  </div>
)

export default CreateProgram;