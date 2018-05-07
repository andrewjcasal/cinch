import React, {Component} from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import UsersDetail from './UsersDetail';
require('./Users.css');

class Users extends Component {

  state = {
    tableData: [],
    currentPage: 'household',
    userDetail: false
  }

  componentDidMount() {
    this.setState({tableData: this.fetchUsers(this.state.currentPage) });
  }

  tableColumns = [
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
      Cell:   row => <button className="view-button" onClick={() => this.viewButton(row.original.id)}>VIEW</button>}
  ]
  
  fetchUsers(page) {
    let tableData;
    switch (page) {
      case "household":
        tableData = [{
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
        }]
        break
      default:
        tableData = [{
          playerName: "Jimmy Smyth",
          id: "190456",
          price: "$ 686.64",
          quantity: "1",
          total: "$ 686.64",
          customer: "J. Moody"
        }]
    }

    return tableData;
  }

  handleClick = data => {
    const tableData = this.fetchUsers(data);
    this.setState({currentPage: data, tableData, userDetail: false})
  }

  viewButton = () => {
    this.setState({userDetail: true})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <Sidebar active={this.state.currentPage} pageType="admin" handleClick={this.handleClick}/>
          </Col>
          <Col md={9}>
            {this.state.userDetail ?
              <UsersDetail /> :
              <SectionWithHeading heading="Search" bulk active>
                <Table
                  data={this.state.tableData}
                  columns={this.tableColumns}
                  minRows={0}
                  showPaginationTop={true}
                  showPaginationBottom={false}
                />
              </SectionWithHeading> }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Users;