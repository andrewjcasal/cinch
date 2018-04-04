import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import PaymentMethodType from '../Components/PaymentMethodType/PaymentMethodType';
import AddPaymentType from '../Components/PaymentMethodType/AddPaymentType';
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
            <ContentContainer>
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
                    <Col md={12}><FooterButtons centered save="black" /></Col>
                  </Row>
              </Col>
            </ContentContainer>
          </Col>
          <Col md={4} style={{borderLeft: "2px solid #F5F5F5"}}>
            <ContentContainer>
              <PaymentMethodType type="visa" number={5495} default />
              <PaymentMethodType type="visa" number={8393} />
              <AddPaymentType />
              <a href="#" className="button save-default">SAVE AS DEFAULT</a>
            </ContentContainer>
          </Col>
          <Clearfix />
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default PaymentMethod;