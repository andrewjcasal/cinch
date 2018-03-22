import React from 'react';
import SearchListing from '../Components/SearchListing';
import SearchFilter from '../Components/SearchFilter';
import LandingNavbar from '../Components/LandingNavbar';
import Dropdown from '../Components/UI/Dropdown/Dropdown';
import Footer from '../Components/Footer/Footer';
import {Row, Col} from 'react-bootstrap';
import Logo from '../assets/images/cinch-white.png';
import Button from '../Components/UI/Button/Button';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
require("../assets/stylesheets/bootstrap4.min.css");
require('./Landing.css');

const Landing = () => (
  <div className="landing">
    <div className="background">
      <div className="wrapper">
        <Row className="navbarnav">
          <Col md={4}>
            <Row>
              <Col md={4}>
                <a href="#" ><img src={Logo} className="logo-image" /></a>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={4}><a href="#">Home</a></Col>
              <Col md={4}><a href="#">Features</a></Col>
              <Col md={4}><a href="#">Products</a></Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={4}></Col>
              <Col md={4}><a href="#" class="white-small">Join</a></Col>
              <Col md={4}><a href="#">Login</a></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <h1>Welcome to<br />Cinch Sports</h1>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Dropdown title="Organization Name" />
          </Col>
          <Col md={3}>
            <Dropdown title="Select Sport" />
          </Col>
          <Col md={2}>
            <Dropdown title="Activity Type" />
          </Col>
          <Col md={2}>
            <Dropdown title="City or Zip" />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <button className="white">Search</button>
        </Row>
      </div>
    </div>
    <div className="wrapper">
      <Footer />
    </div>
  </div>
)

export default Landing;