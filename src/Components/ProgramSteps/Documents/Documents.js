import React from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import Dropzone from 'react-dropzone';
import Table from '../Components/Table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import { Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import TableColumnLayout from '../Components/TableColumnLayout';
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
  {
    Header: "", accessor: "check", width: 50,
    Cell: row => (
      <div className="centered">
        <input type="checkbox" />
      </div>)
  },
  { Header: "Name", accessor: "name", width: 122 },
  {
    Header: () => <div className="centered">Required</div>,
    accessor: "required", width: 70,
    Cell: row => (
      <div className="centered">
        <input type="checkbox" />
      </div>)
  },
  {
    Header: () => <div className="centered">Photo</div>,
    accessor: "photo", width: 54,
    Cell: row => (
      <div className="centered">
        <input type="checkbox" />
      </div>)
  },
  TableColumnLayout("more", 40, { isCentered: true })
]

class CreateProgramDocuments extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (<div id="CreateProgram">
      <Container>
        <ProgramSteps completed="2" />
        <SectionWithHeading heading="Description">
          <ContentContainer type="Programs" left={
            <div>
              <Row>
                <Col md={12}><input type="text" placeholder="Document Name" /></Col>
              </Row>
              <Dropzone onDrop={this.onDrop.bind(this)} className="file-upload">Upload</Dropzone>
              <div id="uploadFile">{this.state.files.length ? this.state.files.map(f => <span>{f.name} - {f.size} bytes</span>) : "No Document Uploaded"}</div>
              <Row>
                <Col md={12}>
                  <Wysiwyg />
                  <FooterButtons save />
                </Col>
              </Row>
            </div>
          } right={
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
            <FooterButtons cancel next="/questions" />
          </ ContentContainer>
        </SectionWithHeading>
      </Container>
    </div>
    )
  }
}

export default CreateProgramDocuments;