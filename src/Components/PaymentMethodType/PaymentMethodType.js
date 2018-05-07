import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Visa from '../../assets/images/visa.png';
require('./PaymentMethodType.css')

const PaymentMethodType = (props) => {
  return (
    <Col md={12} className="payment-method-type">
      <div className="circle-box"></div>
      <img className="payment-icon" src={Visa} />
      <p>*{props.number} {props.default && "(Default)"}</p>
    </Col>)
}

export default PaymentMethodType;