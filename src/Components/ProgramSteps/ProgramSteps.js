import React from 'react';
import './ProgramSteps.css';

const ProgramSteps = (props) => (
  <ul className="ProgramSteps section">
    <li>
      <div className={props.completed >= 1 && "completed"}></div>
      <h3>First Step</h3>
      <p>Description</p>
    </li>
    <li>
      <div className={props.completed >= 2 && "completed"}></div>
      <h3>Second Step</h3>
      <p>Documents</p>
    </li>
    <li>
      <div className={props.completed >= 3 && "completed"}></div>
      <h3>Third Step</h3>
      <p>Questions</p>
    </li>
    <li>
      <div className={props.completed >= 4 && "completed"}></div>
      <h3>Fourth Step</h3>
      <p>Divisions</p>
    </li>
    <li>
      <div className={props.completed >= 5 && "completed"}></div>
      <h3>Fifth Step</h3>
      <p>Messages</p>
    </li>
    <li>
      <div className={props.completed >= 6 && "completed"}></div>
      <h3>Sixth Step</h3>
      <p>Complete</p>
    </li>
  </ul>
)

export default ProgramSteps;