import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import DragFile from '../Components/DragFile/DragFile';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Ellipses from '../assets/images/ellipses.png';
import Star from '../assets/images/star.png';
import Table from '../Components/Table';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col} from 'react-bootstrap';
require('../containers/App/App.css');
require('../Components/Table.css');
require('./Family.css');

const TableData = [{
  check: "&nbsp;",
  name: "Jimmy Smyth",
  required: "Parent",
  photo: "Male",
  more: "12/3/2017"
}];
const TableColumns = [
  {Header: "",          accessor: "check", width: 50,
  Cell: row => (
    <div className="centered">
      <input type="checkbox" />
    </div>)},
  {Header: "Name",      accessor: "name", width: 161},
  {Header: "Required",  accessor: "required", width: 100,
  Cell: row => (
    <div className="centered">
      <input type="checkbox" />
    </div>)},
  {Header: "Photo",     accessor: "photo", width: 44},
  {
    Header: "",
    accessor: "more",
    width: 38, 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  }
]

const CreateProgramDocuments = () => (
  <div id="CreateProgram">
    <Container>
      <ProgramSteps completed="2" />
      <SectionWithHeading heading="Description">
        <ContentContainer left={
          <div>
            <Row>
              <Col md={12}>
                <input type="text" placeholder="Document Name" />
              </Col>
            </Row>
            <div className="file-upload">
                <span>Upload</span>
                <input id="uploadBtn" type="file" className="upload" />
            </div>
            <input id="uploadFile" placeholder="No Document Uploaded" disabled="disabled" />
            <Row>
              <Col md={12}>
                <Wysiwyg />
                <FooterButtons save />
              </Col>
            </Row>
          </div>
        } right= {
          <div class="bordered">
            <Table
              data={TableData}
              columns={TableColumns}
              minRows={0}
              showPaginationTop={false}
              showPaginationBottom={false}
            />
          </div>
        }>
          <FooterButtons cancel next />
        </ ContentContainer>
      </SectionWithHeading>
    </Container>
  </div>
)

export default CreateProgramDocuments;