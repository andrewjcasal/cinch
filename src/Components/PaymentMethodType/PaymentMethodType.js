import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Visa from '../../assets/images/visa.png';
require('./PaymentMethodType.css')

const PaymentMethodType = (props) => {
  return (
    <Row className="payment-method-type">
      <Col>
        <div className="circle-box"></div>
        <img className="payment-icon" src={Visa} />
        <p>*{props.number} {props.default && "(Default)"}</p>
      </Col>
    </Row> )
}

export default PaymentMethodType;