import React from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
require('./Users.css');

const TableData = [{
  playerName: "Jimmy Smyth",
  id: "190456",
  price: "$ 686.64",
  quantity: "1",
  total: "$ 686.64",
  customer: "J. Moody"
},{
  playerName: "Jimmy Smyth",
  id: "190456",
  price: "$ 686.64",
  quantity: "1",
  total: "$ 686.64",
  customer: "J. Moody"
}];

const TableColumns = [
  {Header: row => (<div style={{marginLeft: 24 + "px"}}><input type="checkbox" /></div>),
                          accessor: "empty",      width: 90,
    Cell:   row => (<div style={{marginLeft: 24 + "px"}}><input type="checkbox" /></div>)},
  {Header:   "Image",     accessor: "player",     width: 94,
    Cell:   row => (<div className="avatar-image"></div>)},
  {Header: "Player Name", accessor: "playerName", width: 126},
  {Header: "ID",          accessor: "id",         width: 77},
  {Header: "Price",       accessor: "price",      width: 99},
  {Header: "Quan.",       accessor: "quantity",   width: 68},
  {Header: "Total Price", accessor: "total",      width: 107},
  {Header: "Customer",    accessor: "customer",   width: 75},
  {Header: "",            accessor: "view",       width: 65,
    Cell:   row => (<button className="view-button">VIEW</button>)}
]

const Users = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="1" pageType="admin" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Search" bulk active>
          <Table
            data={TableData}
            columns={TableColumns}
            minRows={0}
            showPaginationTop={true}
            showPaginationBottom={false}
          />
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default Users;