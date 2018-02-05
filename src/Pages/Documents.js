import React, { Component } from 'react';
import Container from '../Components/Container';
import PageToggle from '../Components/PageToggle';
import ReactTable from 'react-table';
import SectionWithHeading from '../Components/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');
require('../Components/CinchTable.css');
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
  {Header: "",     accessor: "empty", width: "24"},
  {
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
        <ReactTable
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