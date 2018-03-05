import React from 'react';
import Container from '../Layouts/Container';
import SectionWithHeading from '../Components/SectionWithHeading';
import ContentContainer from '../Layouts/ContentContainer';
import Dropdown from '../Components/Dropdown';
import Wysiwyg from '../Components/Wysiwyg';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col, Clearfix} from 'react-bootstrap';
import SetupSidebar from '../Components/SetupSidebar';
require('../App.css');

const PaymentMethod = () => (
  <Container left={<SetupSidebar active="5" />}>
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
              <Dropdown title="MM" />
            </Col>
            <Col md={4}>
              <p class="subheading">&nbsp;</p>
              <Dropdown title="YYYY" />
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
  </Container>
)

export default PaymentMethod;