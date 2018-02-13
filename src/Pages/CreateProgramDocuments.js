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

const CreateProgramDocuments = () => (
  <div id="CreateProgram">
    <Container>
      <ProgramSteps completed="2" />
      <SectionWithHeading heading="Description">
        <ContentContainer left={
          <div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Document Name" />
              </div>
          <div class="file-upload">
              <span>Upload</span>
              <input id="uploadBtn" type="file" class="upload" />
          </div>
          <input id="uploadFile" placeholder="No Document Uploaded" disabled="disabled" />
          <div class="row">
            <div class="col-md-12">
              <div class="textarea">
                <!-- <div class="wysiwyg">
                  <a href="#">
                    <img class="bold" src="assets/images/programs/bold.png" />
                  </a>
                  <a href="#">
                    <img class="italic" src="assets/images/programs/italic.png" />
                  </a>
                  <a href="#">
                    <img class="link" src="assets/images/programs/link.png" />
                  </a>
                  <a href="#">
                    <img class="image" src="assets/images/programs/image.png" />
                  </a>
                  <a href="#">
                    <img class="unordered" src="assets/images/programs/unordered.png" />
                  </a>
                  <a href="#">
                    <img class="ordered" src="assets/images/programs/ordered.png" />
                  </a>
                  <a href="#">
                    <img class="code" src="assets/images/programs/code.png" />
                  </a>
                  <a href="#">
                    <img class="quote" src="assets/images/programs/quote.png" />
                  </a>
                </div> -->
                <textarea></textarea>
              </div>
              <button class="save-button">SAVE</button>
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

export default CreateProgramDocuments;