import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export default function FieldGroup({ id, size, label, help, ...props }) {
  return (
    <FormGroup bsSize={size ? size : null}controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
