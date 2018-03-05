import React from 'react';
import Container from '../Layouts/Container';
import ProgramSteps from '../Components/ProgramSteps';
import Table from '../Components/Table';
import SectionWithHeading from '../Components/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import ContentContainer from '../Layouts/ContentContainer';
import Dropdown from '../Components/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import Datepicker from '../Components/Datepicker';
import {Row, Col, Popover, OverlayTrigger} from 'react-bootstrap';
require('../App.css');

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const TableData = [{
  question: "Question 1"
}, {
  question: "Question 2"
}, {
  question: "Question 3"
}, {
  question: "Question 4"
}];
const TableColumns = [
  {Header: () => <div style={{paddingLeft: 18 + 'px'}}>Question</div>,
    accessor: "question", width: 259,
    Cell: row => (
      <div style={{paddingLeft: 18 + 'px'}}>
        {row.value}
      </div>)},
  {Header: () => <div className="centered">Required</div>,
    accessor: "required", width: 96,
    Cell: row => (
      <div className="centered">
        <input type="checkbox" />
      </div>)},
  {
    Header: "",
    accessor: "more",
    width: 38, 
    Cell: row => (
      <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
        <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      </OverlayTrigger>
      )
  }
]

const Divisions = () => (
  <Container>
    <ProgramSteps completed="4" />
    <SectionWithHeading heading="Divisions">
      <ContentContainer type="programs" left={
        <div>
          <Row>
            <Col md={12}><p className="subheading">Details</p></Col>
          </Row>
          <Row>
            <Col md={12}><input type="text" placeholder="Division Name" /></Col>
          </Row>
          <Row>
            <Col md={3}><Datepicker placeholder="Age Range"/></Col>
            <Col md={3}><Datepicker placeholder="Age Range"/></Col>
            <Col md={3}><Dropdown title="Gender" options={["male","female"]}/></Col>
            <Col md={3}><input type="text" placeholder="Max # of Players" /></Col>
          </Row>
          <Row>
            <Col md={12}><p className="subheading">Dates</p></Col>
          </Row>
          <Row>
            <Col md={4}><Datepicker placeholder="Registration Open"/></Col>
            <Col md={4}><Datepicker placeholder="Late Fee Start Date"/></Col>
            <Col md={4}><Datepicker placeholder="Registration Close"/></Col>
          </Row>
          <Row>
            <Col md={12}><p className="subheading">Fees</p></Col>
          </Row>
          <Row>
            <Col md={3}><input type="text" placeholder="Program Fee" /></Col>
            <Col md={3}><input type="text" placeholder="Late Fee" /></Col>
          </Row>
          <Row>
            <Col md={12}><p className="subheading"><input type="checkbox" />Enable Waitlist</p></Col>
          </Row>
          <Row>
            <Col md={4}><Datepicker placeholder="Waitlist Start Date"/></Col>
          </Row>
          <Row>
            <Col md={12}><FooterButtons save /></Col>
          </Row>
        </div>
      } right = {
        <div class="bordered">
          <Table
            data={TableData}
            columns={TableColumns}
            minRows={0}
            showPaginationTop={false}
            showPaginationBottom={false}
          />
        </div>
      }>
        <FooterButtons cancel next />
      </ ContentContainer>
    </SectionWithHeading>
  </Container>
)

export default Divisions;