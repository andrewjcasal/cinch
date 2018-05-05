import React from 'react';
import Container from '../Components/UI/Container/Container';
import ProgramSteps from '../Components/ProgramSteps/ProgramSteps';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import FooterButtons from '../Components/FooterButtons';
import { Row, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import dropDownOptions from '../Components/UI/Dropdown/dropdownOptions';
import Description from '../Components/ProgramSteps/Description/Description';
require('../Components/Table.css');
require('./Family.css');

class CreateProgram extends React.Component {

  state = {
    complete: false,
    currentStep: 1,
    stepLabels: {
      1: 'Program Description',
      2: 'Divisions', 
      3: 'Questions',
      4: 'Divisions',
      5: 'Messages',
      6: 'Complete',
    },
    sports: [],
    programType: [],
  }

  componentDidMount() {
    dropDownOptions.Sports(data =>
      this.setState({sports: data})
    )
    dropDownOptions.ProgramType(data =>
      this.setState({programType: data})
    )
  }

  _next = (data) => {
    let currentStep = this.state.currentStep;
    console.log('data (╯°□°)╯︵ ┻━┻ ', data)
    // Make sure currentStep is set to something reasonable
    if (currentStep >= 5) {
      currentStep = 6;
    } else {
      currentStep = currentStep + 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep = currentStep - 1;
    }

    this.setState({
      currentStep: currentStep
    });
  }

  getStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
        <div>
          <Description />
        </div>
        )
      default: 
        " Something went horribly wrong =| ";
        break;
    }
  }

   render() {
    const handleStepDisplay = this.getStep(this.state.currentStep)
    const { stepLabels, currentStep } = this.state
    return (
      <div id="CreateProgram">
        <Container>
          <ProgramSteps completed={currentStep} />
          <SectionWithHeading heading={stepLabels[currentStep]}>
            {handleStepDisplay}
            <FooterButtons cancel next={this._next} />
          </SectionWithHeading>
        </Container>
      </div>
    )
  }
}

export default CreateProgram;