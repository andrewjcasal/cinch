import React, {Component} from 'react';
import Container from '../Components/UI/Container/Container';
import ContentContainer from '../Components/UI/ContentContainer/ContentContainer';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import FooterButtons from '../Components/FooterButtons';
import {Row, Col, Clearfix, Modal} from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import dropdownOptions from '../Components/UI/Dropdown/dropdownOptions';
import Button from '../Components/UI/Button/Button';
require('../containers/App/App.css');



class Administrators extends Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return ( <Container>
      <Row>
        <Col md={3}>
          <Sidebar active="5" pageType="setup" />
        </Col>
        <Col md={9}>
          <SectionWithHeading heading="Administrators" addnew={this.handleShow}>
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
                    <Dropdown title="MM" options={dropdownOptions.Months} />
                  </Col>
                  <Col md={4}>
                    <p class="subheading">&nbsp;</p>
                    <Dropdown title="YYYY" options={dropdownOptions.Years} />
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

      <Modal style={{paddingTop: 300}} show={this.state.show}> 
        <div className="section">
          <div className="heading">
            Invite New Administrator
          </div>
          <Row>
            <Col md={12}>
              <input type="text" placeholder="Full Name" />
            </Col>
            <Col md={12}>
              <input type="text" placeholder="Email" />
            </Col>
            <Col md={12}>
              <Dropdown title="Select Role" />
            </Col>
            <Col md={12}>
              <Button btnType="blue" width={183}>SEND INVITE</Button>
            </Col>
          </Row>
        </div>
      </Modal>
    </Container> )}}

export default Administrators;