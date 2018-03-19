import React from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import SubSection from '../Components/UI/SubSection/SubSection';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Table from '../Components/Table';
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import AddUser from '../assets/images/add-user.png';
import Tick from '../assets/images/tick-md.png';
import PlaceholderAvatar from '../assets/images/placeholder-avatar.png';
require('./UsersDetail.css');

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
                          accessor: "empty",      width: "90",
    Cell: row => (<div style={{marginLeft: 24 + "px"}}><input type="checkbox" /></div>)},
  {Header: "Image",       accessor: "player",     width: "94",
    Cell: row => (<div className="avatar-image"></div>)},
  {Header: "Player Name", accessor: "playerName", width: "126"},
  {Header: "ID",          accessor: "id",         width: "77"},
  {Header: "Price",       accessor: "price",      width: "99"},
  {Header: "Quan.",       accessor: "quantity",   width: "68"},
  {Header: "Total Price", accessor: "total",      width: "107"},
  {Header: "Customer",    accessor: "customer",   width: "75"},
  {Header: "",            accessor: "view",       width: "65",
    Cell: row => (<button className="view-button">VIEW</button>)}
]

const Users = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="1" pageType="admin" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="View Member Details">
          <SubSection>
            <Row>
              <Col md={3}>
                <img src={PlaceholderAvatar} style={{marginLeft: 30 + "px"}} />
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <input type="text" placeholder="First Name" />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Last Name" />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Email" />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Mobile Number" />
                  </Col>
                  <Col md={6}>
                    <Dropdown options={['Male', 'Female', 'Other']}title="Gender" />
                  </Col>
                  <Col md={6}>
                    <Datepicker placeholder="Birthday" includeTime />
                  </Col>
                </Row>
              </Col>
            </Row>
          </SubSection>
          <SubSection heading="Login">
            <Row>
              <Col md={3}></Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <input type="text" />
                  </Col>
                  <Col md={6}>
                    <button class="send-invite">SEND INVITE</button>
                    <button class="reset-password">Reset Password?</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </SubSection>
          <SubSection heading="Address">
            <Row>
              <Col md={3}>
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={12}>
                    <input type="text" placeholder="Street Address" />
                  </Col>
                  <Col md={4}>
                    <input type="text" placeholder="City" />
                  </Col>
                  <Col md={4}>
                    <input type="text" placeholder="State" />
                  </Col>
                  <Col md={4}>
                    <input type="text" placeholder="Zip" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </SubSection>
          <SubSection heading="Relationships">
            <Row>
              <Col md={3}>
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={4}>
                    <Dropdown title="Select Member" />
                  </Col>
                  <Col md={4}>
                    <Dropdown title="Relationship" />
                  </Col>
                  <Col md={4}>
                    <a class="with-icon" href="#">
                      <span class="tick-mark"><img src={Tick} /></span>
                      Access Financials</a>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <a class="with-icon" href="#">
                      <img src={AddUser} />Add Another</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </SubSection>
          <SubSection heading="Orders" all>
          </SubSection>
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