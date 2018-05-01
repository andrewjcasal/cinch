import React, {Component} from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col, Clearfix, Modal} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import dropdownOptions from '../Components/UI/Dropdown/dropdownOptions';
import Button from '../Components/UI/Button/Button';
import Table from '../Components/Table';
import TableColumnLayout from '../Components/TableColumnLayout';
require('../containers/App/App.css');

const TableData = [{
  image: "Brian Smith",
  name: "Competitive Soccer",
  email: "jimmy@smyth.com",
  phone: "(408) 381-1234",
  more: "blah"
}];

const TableColumns = [
  TableColumnLayout("check", 65, {isCentered: true}),
  TableColumnLayout("empty", 25),
  TableColumnLayout("image",  89, {isCentered: true}),
  {Header: "Name",          accessor: "name",   width: 152},
  {Header: "Email",         accessor: "email",   width: 198},
  {Header: "Phone",         accessor: "phone",   width: 138},
  TableColumnLayout("access", 120),
  TableColumnLayout("more",  72, {isCentered: true})
]

class Administrators extends Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  render() {
    return ( <Container>
      <Row>
        <Col md={3}>
          <Sidebar active="5" pageType="setup" />
        </Col>
        <Col md={9}>
          <SectionWithHeading heading="Administrators" addnew={this.handleShow}>
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

      <Modal style={{paddingTop: 300}} show={this.state.show}> 
        <div className="section">
          <div className="heading">
            Invite New Administrator
            <a href="#" onClick={this.handleHide} class="close-button">X</a>
          </div>
          <Row>
            <Col md={12}>
              <input type="text" placeholder="Full Name" />
            </Col>
            <Col md={12}>
              <input type="text" placeholder="Email" />
            </Col>
            <Col md={12}>
              <Dropdown title="Select Role" />
            </Col>
            <Col md={12}>
              <Button btnType="blue" width={183}>SEND INVITE</Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </Container> )}}

export default Administrators;