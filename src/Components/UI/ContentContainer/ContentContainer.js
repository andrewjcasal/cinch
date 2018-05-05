import React from 'react';
import {Row, Col} from 'react-bootstrap';
require('./ContentContainer.css');

const ContentContainer = (props) => (
  <Row className={props.type + " Content-Container"}>
    {props.top}
    {props.left &&
      <Col md={8}>
        {props.left}
      </Col>}
    {props.right &&
      <Col md={4}>
        {props.right}
      </Col> }
    {props.children &&
      <Col md={12}>
        {props.children}
      </Col>
    }
  </Row>
)

export default ContentContainer;