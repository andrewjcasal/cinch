import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import PageToggle from '../Components/UI/PageToggle/PageToggle';
import ReactTable from 'react-table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import Table from 'react-table';
require('bootstrap/dist/css/bootstrap.css');
require('../containers/App/App.css');
require('bootstrap/dist/css/bootstrap.css');
require('./OrderHistory.css');

const DocumentsData = [{
  player: "blah",
  playerName: "Brian Smith",
  name: "Birth Certificate",
  type: "PDF",
  date: "12/3/2017",
  view: "",
  more: "blah"
}];
const DocumentsColumns = [
  { 
    Header: "",     
    accessor: "empty", 
    width: "24"
  },{
    Header: "Player",
    accessor: "player",
    width: "119",
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Player Name",accessor: "playerName", width: "222"},
  {Header: "Name",       accessor: "name", width: "292"},
  {Header: "Type",       accessor: "type", width: "156"},
  {Header: "Date",       accessor: "date", width: "165"},
  {Header: "",           accessor: "view", width: "65"},
  {
    Header: "More",
    accessor: "more",
    width: "40", 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  },
]

const Documents = () => (
  <div id="Documents">
    <Container>
      <PageToggle selected="documents" />
      <SectionWithHeading heading="Documents" dropdown="true">
        <Table
          data={DocumentsData}
          columns={DocumentsColumns}
          minRows={0}
          showPaginationTop={false}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
    </Container>
  </div>
)

export default Documents;