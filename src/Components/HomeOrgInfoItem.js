import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomeOrgInfoItem = (props) => (
  <Col md={3} className="info-display__container">
    <Col md={4}>
      <div className="button display-btn content centered">
        <img src={props.icon} alt={props.title} />
      </div>
    </Col>
    <Col md={5} className="info-display-content__container">
      <div className="info-display__content numbers"> {props.numbers} </div>
      <div className="info-display__content content-title"> {props.title} </div>
    </Col>
  </Col>
)

export default HomeOrgInfoItem;