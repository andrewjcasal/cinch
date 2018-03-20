import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
require('./LabeledInput.css');

const LabeledInput = function (props) { 

  let input = <input type={props.input || "text"} placeholder={props.placeholder} />
  
  if (props.children) {
    input = props.children;
  }

  if (props.dropdown) {
    input = <Dropdown title={props.type} />;
  }

  return ( <div className="labeled-input">
    <span>{props.type || " "}</span>
    {input}
  </div> )};


export default LabeledInput;