import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import PageToggle from '../Components/UI/PageToggle/PageToggle';
import ReactTable from 'react-table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import Star from '../assets/images/star.png';
import Table from 'react-table';
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
  {
    Header: "",
    accessor: "starred",
    width: "90",
    Cell: row => (<div className="starred"><img src={Star} /></div>)
  }, {
    Header: "Image",
    accessor: "image",
    width: "95",
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Name",      accessor: "name", width: "145"},
  {Header: "Type",      accessor: "type", width: "117"},
  {Header: "Gender",    accessor: "gender", width: "105"},
  {Header: "Birthdate", accessor: "birthdate", width: "131"},
  {Header: "ID",        accessor: "id", width: "110"},
  {Header: "Email",     accessor: "email", width: "210"},
  {Header: "Mobile",    accessor: "mobile", width: "97"},
  {
    Header: "More",
    accessor: "more",
    width: "40", 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  },
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
  {Header: "",             accessor: "empty", width: "89"},
  {
    Header: "Image",
    accessor: "image",
    width: "95",
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Name",         accessor: "name", width: "196"},
  {Header: "Relationship", accessor: "relationship", width: "253"},
  {Header: "Email",        accessor: "email", width: "321"},
  {Header: "Mobile",       accessor: "mobile", width: "147"},
  {
    Header: "",
    accessor: "more",
    width: "40", 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  },
]

const Family = () => (
  <div id="Family">
    <Container>
      <PageToggle selected="family" />
      <div className="gen-info section">
        <div className="heading">
          General Information
          <div className="options">
            <img src={Ellipses} />
          </div>
        </div>
        <div className="gen-info-content">
          <p className="name-label">Household Name</p>
          <p className="info">Gray</p>

          <p className="name-label">Address</p>
          <p className="info">
            1234 Main Street
          </p>
          <p className="info">
            Any Town, CA 95124
          </p>
        </div>
      </div>
      <div className="notes section">
        <div className="heading">
          Notes
          <div className="options">
            <img src={Ellipses} />
          </div>
        </div>
      </div>
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