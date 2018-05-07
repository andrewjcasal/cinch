import React from 'react';
import {Row, Col} from 'react-bootstrap';
require('./AddPaymentType.css')

const AddPaymentType = (props) => {
  return (
    <Col md={12} className="add-payment">
      <div className="circle-box"></div>
      <p>Add Bank Account</p>
    </Col>)
}

export default AddPaymentType;