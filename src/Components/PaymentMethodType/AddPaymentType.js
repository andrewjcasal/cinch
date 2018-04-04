import React from 'react';
import {Row, Col} from 'react-bootstrap';
require('./AddPaymentType.css')

const AddPaymentType = (props) => {
  return (
    <Row className="add-payment">
      <Col>
        <div className="circle-box"></div>
        <p>Add Bank Account</p>
      </Col>
    </Row> )
}

export default AddPaymentType;