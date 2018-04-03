import React from 'react'
import { Row, Col } from 'react-bootstrap';
import EyeCon from '../assets/images/eye icon.png';
import DollarIcon from '../assets/images/dollar icon.png';
import CartIcon from '../assets/images/cart-icon.png';
import UserIcon from '../assets/images/cart-icon.png';

require('./HomeOrgInfo.css')

const HomeOrgInfo = () => {
  return(
    <Row className="info-display section content">
      <Col md={3} className="info-display__container">
        <Col md={4}>
          <div className="button display-btn content centered">
            <img src={CartIcon} alt="shopping cart"/>
          </div>
        </Col>
        <Col md={5} className="centered">
          <div className="info-display__content numbers"> 8956 </div>
          <div className="info-display__content content-title"> Total Registrations </div>
        </Col>
      </Col>
      <span className="line-break centered"></span>
      <Col md={3} className="info-display__container">
        <Col md={4}>
          <div className="button display-btn content centered">
            <img src={DollarIcon} alt="Annual Income"/>
          </div>
        </Col>
        <Col md={5} className="centered">
          <div className="info-display__content numbers"> $7841.78 </div>
          <div className="info-display__content content-title"> Annual Income </div>
        </Col>
      </Col>
      <span className="line-break centered"></span>
      <Col md={3} className="info-display__container">
        <Col md={4}>
          <div className="button display-btn content centered">
            <img src={UserIcon} alt="Total Members" />
          </div>
        </Col>
        <Col md={5} className="centered">
          <div className="info-display__content numbers"> 6521 </div>
          <div className="info-display__content content-title"> Total Members </div>
        </Col>
      </Col>
      <span className="line-break centered"></span>
      <Col md={3} className="info-display__container">
        <Col md={4}>
          <div className="button display-btn content centered">
            <img src={EyeCon} alt="Active Programs" />
          </div>
        </Col>
        <Col md={5} className="centered">
          <div className="info-display__content numbers"> 5 </div>
          <div className="info-display__content content-title"> Active Programs </div>
        </Col>
      </Col>
    </Row>
  )

};

export default HomeOrgInfo;