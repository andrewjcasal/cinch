import React from 'react';
import Container from '../Components/UI/Container/Container';
import PageToggle from '../Components/UI/PageToggle/PageToggle';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from 'react-table';
import TableColumnLayout from '../Components/TableColumnLayout';
import {Row, Col} from 'react-bootstrap'
require('../containers/App/App.css');
require('bootstrap/dist/css/bootstrap.css');
require('../Components/Table.css');
require('./Family.css');

const MembersData = [{
  starred: "blah",
  image: "&nbsp;",
  name: "Jimmy Smyth",
  type: "Parent",
  gender: "Male",
  birthdate: "12/3/2017",
  id: "12345",
  email: "jim.smyth@gmail.com",
  mobile: "12/3/2017",
  more: "blah"
}];
const MembersColumns = [
  TableColumnLayout("starred",  90, {isCentered: true}),
  {
    Header: "Image",
    accessor: "image",
    width: 95,
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Name",      accessor: "name", width: 145},
  {Header: "Type",      accessor: "type", width: 117},
  {Header: "Gender",    accessor: "gender", width: 105},
  {Header: "Birthdate", accessor: "birthdate", width: 131},
  {Header: "ID",        accessor: "id", width: 110},
  {Header: "Email",     accessor: "email", width: 210},
  {Header: "Mobile",    accessor: "mobile", width: 80},
  TableColumnLayout("more", 40, {isCentered: true})
]

const ContactsData = [{
  image: "Brian Smith",
  name: "Jimmy Smyth",
  relationship: "Friend",
  email: "jim.smith@gmail.com",
  mobile: "1(408)555-1234",
  more: "blah"
}];
const ContactsColumns = [
  {Header: "",             accessor: "empty", width: 89},
  {
    Header: "Image",
    accessor: "image",
    width: 95,
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Name",         accessor: "name", width: 196},
  {Header: "Relationship", accessor: "relationship", width: 253},
  {Header: "Email",        accessor: "email", width: 321},
  {Header: "Mobile",       accessor: "mobile", width: 127},
  TableColumnLayout("more", 40, {isCentered: true})
]

const Family = () => (
  <div id="Family">
    <Container>
      <PageToggle selected="family" />
      <Row>
      <Col md={6}>
        <SectionWithHeading heading="General Information" more>
          <div className="gen-info-content " style={{height: 156}}>
            <p className="name-label">Household Name</p>
            <p className="info">Gray</p>

            <p className="name-label">Address</p>
            <p className="info">
              1234 Main Street<br />

              Any Town, CA 95124
            </p>
          </div>
        </SectionWithHeading>
      </Col>
      <Col md={6}>
        <SectionWithHeading heading="Notes" more>
          <div style={{height: 156}}></div>
        </SectionWithHeading>
      </Col>
      </Row>
      <SectionWithHeading heading="Members">
        <Table
          data={MembersData}
          columns={MembersColumns}
          minRows={0}
          showPaginationTop={false}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
      <SectionWithHeading heading="Emergency Contacts" addnew="true">
        <Table
          data={ContactsData}
          columns={ContactsColumns}
          minRows={0}
          showPaginationTop={false}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
    </Container>
  </div>
)

export default Family;