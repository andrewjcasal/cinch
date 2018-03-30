import React from 'react';
import Container from '../Components/UI/Container/Container';
import Table from '../Components/Table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
require('bootstrap/dist/css/bootstrap.css');
require('../containers/App/App.css');
require('../Components/Table.css');
require('./Family.css');

const ProgramsData = [{
  image: "Brian Smith",
  name: "Jimmy Smyth",
  relationship: "Friend",
  email: "jim.smith@gmail.com",
  mobile: "1(408)555-1234",
  more: "blah"
}];
const ProgramsColumns = [
  {Header: "",             accessor: "empty", width: 89},
  {
    Header: "Image",
    accessor: "image",
    width: 95,
    Cell: row => <div className="avatar-image"></div>
  },
  {Header: "Name",         accessor: "name", width: 196},
  {Header: "Relationship", accessor: "relationship", width: 253},
  {Header: "Email",        accessor: "email", width: 321},
  {Header: "Mobile",       accessor: "mobile", width: 147},
  {
    Header: "",
    accessor: "more",
    width: 40, 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  }
]

const Programs = () => (
  <div id="Programs">
    <Container>
      <SectionWithHeading heading="Program Name" bulk="true" active="true" createnew="true">
        <Table
          data={ProgramsData}
          columns={ProgramsColumns}
          minRows={0}
          showPaginationTop={true}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
    </Container>
  </div>
)

export default Programs;