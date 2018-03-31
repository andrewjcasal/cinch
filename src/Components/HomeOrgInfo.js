import React from 'react'
import { Row, Col } from 'react-bootstrap';

require('./HomeOrgInfo.css')

const HomeOrgInfo = () => {
  return(
    <Row className={"info-display section"}>
      <Col md={2}>
        <Col md={6}>
          <div className={"display-btn content centered"}></div>
        </Col>
        <Col md={6}>
          hello
        </Col>
      </Col>
      <Col md={1} className={'centered'}>
        <div className={"line-break centered"}></div>
      </Col>
      <Col md={2}>
        <Col md={6}>
          <div className={"display-btn content centered"}></div>
        </Col>
        <Col md={6}>
          hello
        </Col>
      </Col>
      <Col md={1} className={'centered'}>
        <div className={"line-break centered"}></div>
      </Col>
      <Col md={2}>
        <Col md={6}>
          <div className={"display-btn content centered"}></div>
        </Col>
        <Col md={6}>
          hello
        </Col>
      </Col>
      <Col md={1} className={'centered'}>
        <div className={"line-break centered"}></div>
      </Col>
      <Col md={2}>
        <Col md={6}>
          <div className={"display-btn content centered"}></div>
        </Col>
        <Col md={6}>
          hello
        </Col>
      </Col>
    </Row>
  )

};

export default HomeOrgInfo;