import React from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col, Clearfix} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import dropdownOptions from '../Components/UI/Dropdown/dropdownOptions';
require('../containers/App/App.css');

const PaymentMethod = () => (
  <Container>
    <Row>
      <Col md={3}>
        <Sidebar active="4" pageType="setup" />
      </Col>
      <Col md={9}>
        <SectionWithHeading heading="Payment Method">
          <ContentContainer>
            <Col md={8}>
              <Row>
                <Col md={6}>
                  <p class="subheading">Cardholder name</p>
                  <input type="text" placeholder="Enter Name" />
                </Col>
                <Col md={6}>
                  <p class="subheading">Card number</p>
                  <input type="text" placeholder="Enter Card Number" />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <p class="subheading">Expire Date</p>
                  <Dropdown options={dropdownOptions.Months} title="MM" />
                </Col>
                <Col md={4}>
                  <p class="subheading">&nbsp;</p>
                  <Dropdown options={dropdownOptions.Years} title="YYYY" />
                </Col>
                <Col md={4}>
                  <p class="subheading">CVV</p>
                  <input type="text" placeholder="Enter Card Number" />
                </Col>
              </Row>
              <Row>
                <Col md={12}><FooterButtons centered save="black" /></Col>
              </Row>
            </Col>
            <Col md={4}></Col>
            <Clearfix />
          </ContentContainer>
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default PaymentMethod;