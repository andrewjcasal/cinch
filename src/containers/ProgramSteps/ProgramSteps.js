import React, { Component } from 'react';
import './ProgramSteps.css';

class ProgramSteps extends Component {
  render() {
    return (
      <ul className="ProgramSteps section">
        <li>
          <div className="checkmark-circle completed">
          </div>
          <h3>First Step</h3>
          <p>Description</p>
        </li>
        <li>
          <div className="checkmark-circle completed">
          </div>
          <h3>Second Step</h3>
          <p>Documents</p>
        </li>
        <li>
          <div className="checkmark-circle completed">

          </div>
          <h3>Third Step</h3>
          <p>Questions</p>
        </li>
        <li>
          <div className="checkmark-circle completed">

          </div>
          <h3>Fourth Step</h3>
          <p>Divisions</p>
        </li>
        <li>
          <div className="checkmark-circle">

          </div>
          <h3>Fifth Step</h3>
          <p>Messages</p>
        </li>
        <li>
          <div className="checkmark-circle">

          </div>
          <h3>Sixth Step</h3>
          <p>Complete</p>
        </li>
      </ul>
    );
  }
}

export default ProgramSteps;