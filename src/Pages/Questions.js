import React from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import Table from '../Components/Table';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Ellipses from '../assets/images/ellipses.png';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col, Popover, OverlayTrigger} from 'react-bootstrap';
import TableColumnLayout from '../Components/TableColumnLayout';
require('../containers/App/App.css');
require('./Family.css');

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
    accessor: "question", width: 189,
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
  TableColumnLayout("more",  40, {isCentered: true})
]

const Questions = () => (
  <div id="CreateProgram">
    <Container>
      <ProgramSteps completed="3" />
      <SectionWithHeading heading="Description">
        <ContentContainer type="Programs" left={
          <div>
            <Row>
              <Col md={12}>
                <p class="instructions">By Default you will be provided with Player Name, Parent Name, Player Birthdate, Parent contact information.  You do not need to ask for these as part of your registration.</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}><input type="text" placeholder="Question" /></Col>
            </Row>
            <Row>
              <Col md={6}><Dropdown title="Answer Type" /></Col>
            </Row>
            <Row>
              <Col md={12}><FooterButtons save /></Col>
            </Row>
          </div>
        } right= {
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
          <FooterButtons cancel next="/divisions" />
        </ ContentContainer>
      </SectionWithHeading>
    </Container>
  </div>
)

export default Questions;