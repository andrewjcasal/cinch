import React from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import DragFile from '../Components/DragFile/DragFile';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import Datepicker from '../Components/Datepicker';
import {Row, Col} from 'react-bootstrap';
import dropDownOptions from '../Components/UI/Dropdown/dropdownOptions'
require('../Components/Table.css');
require('./Family.css');

class CreateProgram extends React.Component {

  state = {
    sports: [],
    programType: []
  }
  componentDidMount() {
    dropDownOptions.Sports(data =>
      this.setState({sports: data})
    )
    dropDownOptions.ProgramType(data =>
      this.setState({programType: data})
    )
  }

  render() {
    return (
      <div id="CreateProgram">
        <Container>
          <ProgramSteps completed="1" />
          <SectionWithHeading heading="Program Description">
            <ContentContainer type="Programs" left={
              <div>
                <Row>
                  <Col md={12}><input type="text" placeholder="Program Name" onChange={this.handleInput} /></Col>
                </Row>
                <Row>
                  <Col md={3}><Dropdown title="Sport" options={this.state.sports} /></Col>
                  <Col md={3}><Dropdown title="Type" options={this.state.programType} /></Col>
                  <Col md={6}><Dropdown title="Affiliation" options={dropDownOptions.Affiliation} /></Col>
                </Row>
                <Row>
                  <Col md={6}><Datepicker placeholder="Registration Open Date/Time" includeTime/></Col>
                  <Col md={3}><Datepicker placeholder="Event Start" /></Col>
                  <Col md={3}><Dropdown options={['Monthly', 'Yearly']} title="Payment Plan" /></Col>
                </Row>
                <Row>
                  <Col md={6}><Datepicker placeholder="Registration Close Date/Time" includeTime/></Col>
                  <Col md={3}><Datepicker placeholder="Event End" /></Col>
                  <Col md={3}><Dropdown options={['$10.00','$20.00']} title="Registration Fee" /></Col>
                </Row>
                <Row>
                  <Col md={12}><Wysiwyg /></Col>
                </Row>
              </div>
            } right= {
              <div>
                <DragFile type="Program" label="Program Logo" />
                <DragFile type="Program" label="Program Photo" />
              </div>
            }>
            </ ContentContainer>
            <FooterButtons cancel next="/create-program-documents" />
          </SectionWithHeading>
        </Container>
      </div>
    )
  }
}

export default CreateProgram;