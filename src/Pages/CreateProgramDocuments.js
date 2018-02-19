import React from 'react';
import Container from '../Components/Container';
import ProgramSteps from '../Components/ProgramSteps';
import DragFile from '../Components/DragFile';
import Table from '../Components/Table';
import SectionWithHeading from '../Components/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import ContentContainer from '../Components/ContentContainer';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');
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
  {Header: "",          accessor: "check", width: 50},
  {Header: "Name",      accessor: "name", width: 161},
  {Header: "Required",  accessor: "required", width: 100},
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
            <div className="row">
              <div className="col-md-12">
                <input type="text" placeholder="Document Name" />
              </div>
            </div>
            <div className="file-upload">
                <span>Upload</span>
                <input id="uploadBtn" type="file" className="upload" />
            </div>
            <input id="uploadFile" placeholder="No Document Uploaded" disabled="disabled" />
            <div className="row">
              <div className="col-md-12">
                <Wysiwyg />
                <FooterButtons save />
              </div>
            </div>
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