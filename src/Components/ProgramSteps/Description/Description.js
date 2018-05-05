import React from 'react';
import Container from '../../UI/Container/Container';
import ProgramSteps from '../ProgramSteps';
import SectionWithHeading from '../../UI/SectionWithHeading/SectionWithHeading';
import ContentContainer from '../../UI/ContentContainer/ContentContainer';
import DragFile from '../../DragFile/DragFile';
import Dropdown from '../../UI/Dropdown/Dropdown';
import Wysiwyg from '../../Wysiwyg';
import FooterButtons from '../../FooterButtons';
import Datepicker from '../../Datepicker';
import { Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import dropDownOptions from '../../UI/Dropdown/dropdownOptions'
require('../../Table.css');
require('../../../Pages/Family.css');

class Description extends React.Component {

  state = {
    sports: [],
    programType: [],
    complete: false,
    content: {},
  }

  componentDidMount() {
    dropDownOptions.Sports(data =>
      this.setState({ sports: data })
    )
    dropDownOptions.ProgramType(data =>
      this.setState({ programType: data })
    )
  }

  handleChange = (e) => {
    console.log('e (╯°□°)╯︵ ┻━┻ ', e)
    // for Wysiwyg only <3
    let content = this.state.content;
    if (e.blocks) {
      content.fullDescription = e.blocks[0]
      this.setState({ content })
    } else if (e.Moment) {
      console.log('e (╯°□°)╯︵ ┻━┻ ', e)
      content.e.customInput = e.customInput
      this.setState({ content })
    } else if (e.target) {
      content[e.target.name] = e.target.value
      this.setState({ content })
    }
  }

  render() {
    const { sports, programType, content } = this.state
    return (
      <ContentContainer type="Programs" left={
        <FormGroup controlId="programName">
          <Row>
            <Col md={12}>
              <FormControl
                name="programName"
                type="text"
                value={content.programName}
                placeholder="Program Name"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Dropdown 
                title="Sport" 
                name='sports'
                onChange={this.handleChange} 
                options={sports} 
              />
            </Col>
            <Col md={3}>
              <Dropdown 
                title="Type" 
                name='programType'
                onChange={this.handleChange}
                options={programType} 
              />
            </Col>
            <Col md={6}>
              <Dropdown 
                title="Affiliation" 
                options={dropDownOptions.Affiliation}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Datepicker 
                onChange={this.handleChange}
                placeholder="Registration Open Date/Time"
                customInput="registrationOpen" 
                includeTime />
            </Col>
            <Col md={3}>
              <Datepicker 
                customInput="eventStart"
                placeholder="Event Start" />
            </Col>
            <Col md={3}>
              <Dropdown options={['Monthly', 'Yearly']} title="Payment Plan" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Datepicker placeholder="Registration Close Date/Time" includeTime />
            </Col>
            <Col md={3}>
              <Datepicker placeholder="Event End" />
            </Col>
            <Col md={3}>
              <Dropdown options={['$10.00', '$20.00']} title="Registration Fee" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Wysiwyg 
                onChange={this.handleChange}
              />
            </Col>
          </Row>
        </FormGroup>
      } right={
        <div>
          <DragFile type="Program" label="Program Logo" />
          <DragFile type="Program" label="Program Photo" />
        </div>
      }>
      </ ContentContainer>
    )
  }
}

export default Description;