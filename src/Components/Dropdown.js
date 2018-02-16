import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Dropdown = (props) => (
  <DropdownButton
    bsStyle={props.title.toLowerCase()}
    title={props.title}
    key={props.i}
    id={`dropdown-basic-${props.i}`}
  >
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3" active>
      Active Item
    </MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
  </DropdownButton>
)

export default Dropdown;