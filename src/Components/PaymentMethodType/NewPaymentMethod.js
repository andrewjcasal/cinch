import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Dropdown from '../UI/Dropdown/Dropdown';
import dropdownOptions from '../UI/Dropdown/dropdownOptions';
import FooterButtons from '../FooterButtons';

const NewPaymentType = (props) => {
  return (
    <Row>
      <Col md={12}>
        <Row>
          <Col md={6}>
            <p className="subheading">Cardholder name</p>
            <input type="text" placeholder="Enter Name" />
          </Col>
          <Col md={6}>
            <p className="subheading">Card number</p>
            <input type="text" placeholder="Enter Card Number" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p className="subheading">Expire Date</p>
            <Dropdown options={dropdownOptions.Months} title="MM" />
          </Col>
          <Col md={4}>
            <p className="subheading">&nbsp;</p>
            <Dropdown options={dropdownOptions.Years} title="YYYY" />
          </Col>
          <Col md={4}>
            <p className="subheading">CVV</p>
            <input type="text" placeholder="Enter Card Number" />
          </Col>
        </Row>
        <Row>
          <Col md={12}><FooterButtons centered save={{buttonType: "black", handleClick: props.onSave}} /></Col>
        </Row>
      </Col>
    </Row>)
}

export default NewPaymentType;