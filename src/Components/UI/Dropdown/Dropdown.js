import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
require('./Dropdown.css');

const Dropdown = (props) => {
  let options = []; 
  
  if (props.options && props.options.length) {
    console.log("in options");
    console.log(props.options);
    options = props.options.map((option, i) =>
      <MenuItem eventKey={i}>{option}</MenuItem>
    );
  }

  return (
    <DropdownButton
      bsStyle={props.title.toLowerCase()}
      title={props.title}
      key={props.i}
      id={`dropdown-basic-${props.i}`}
    >
      {options}
    </DropdownButton>
  )
}

export default Dropdown;