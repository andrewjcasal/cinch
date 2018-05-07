import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import PaymentMethodType from '../Components/PaymentMethodType/PaymentMethodType';
import AddPaymentType from '../Components/PaymentMethodType/AddPaymentType';
import NewPaymentMethod from '../Components/PaymentMethodType/NewPaymentMethod';
import {Row, Col, Clearfix} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import dropdownOptions from '../Components/UI/Dropdown/dropdownOptions';
require('../containers/App/App.css');
require('./PaymentMethod.css');

const PaymentMethod = () => (
  <Container>
    <Row className="payment-method-container">
      <Col md={3}>
        <Sidebar active="4" pageType="setup" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Payment Method">
          <Col md={8}>
            <NewPaymentMethod />
          </Col>
          <Col md={4} style={{borderLeft: "2px solid #F5F5F5"}}>
            <Row>
              <PaymentMethodType type="visa" number={5495} default />
              <PaymentMethodType type="visa" number={8393} />
              <AddPaymentType />
              <a href="#" className="button save-default">SAVE AS DEFAULT</a>
            </Row>
          </Col>
          <Clearfix />
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default PaymentMethod;