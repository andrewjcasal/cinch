import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import PageToggle from '../Components/UI/PageToggle/PageToggle';
import ReactTable from 'react-table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
require('bootstrap/dist/css/bootstrap.css');
require('../containers/App/App.css');
require('../Components/CinchTable.css');
require('./OrderHistory.css');

const DocumentsData = [{
  player: "blah",
  playerName: "Brian Smith",
  name: "Birth Certificate",
  type: "PDF",
  date: "12/3/2017",
  birthday: "10/20/1991",
  parent: "John Smith",
  email: "email@email.com",
  phone: "(408) 290-2677",
  paid: "$686.64",
  pending: "$6.64"
}];
const DocumentsColumns = [
  {Header: "", accessor: "empty", width: "23"},
  {
    Header: row => (
      <input type="checkbox" />),
    accessor: "check",
    width: "64",
    Cell: row => (
      <input type="checkbox" />)
  }, {
    Header: "Image",
    accessor: "image",
    width: "99",
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Player Name",accessor: "playerName", width: "174"},
  {Header: "Birthday",    accessor: "birthday", width: "126"},
  {Header: "Parent",      accessor: "parent", width: "137"},
  {Header: "Email",       accessor: "email", width: "129"},
  {Header: "Phone",       accessor: "phone", width: "128"},
  {Header: "Paid",        accessor: "paid", width: "126"},
  {Header: "Pending",     accessor: "pending", width: "95"},
  {
    Header: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      ),
    accessor: "more",
    width: "40", 
    Cell: row => (
      <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  },
]

export default class Registrations extends Component {
  state = {
    options: {
      heading: "Program Name",
      bulk: true,
      active: true,
      email: true
    }
  }


  render() {
    return (
      <div id="ProgramName">
        <Container>
          <SectionWithHeading options={this.state.options} />
            <ReactTable
              data={DocumentsData}
              columns={DocumentsColumns}
              minRows={0}
              showPaginationTop={false}
              showPaginationBottom={false}
            />
        </Container>
      </div>
    )
  }
}
