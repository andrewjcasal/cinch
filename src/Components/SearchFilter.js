import React from 'react';
import Button from '../Components/UI/Button/Button';
import {Row, Col} from 'react-bootstrap';
import Logo from '../assets/images/programs/Arsenal_FC_lg.png';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
require('./SearchFilter.css');

const SearchFilter = (props) => (
  <Row className="search-filter">
    <Col md={2}>
      <LabeledInput dropdown type="Sport" placeholder="Soccer" />
    </Col>
    <Col md={2}>
      <LabeledInput dropdown type="Type" placeholder="Camps" />
    </Col>
    <Col md={2}>
      <LabeledInput type="Location" placeholder="95124" input="text" />
    </Col>
    <Col md={2}>
      <LabeledInput type="Start Date" placeholder="MM/DD/YYYY" input="text" />
    </Col>
    <Col md={4}>
      <LabeledInput>
        <Button btnType="black">SEARCH</Button>
      </LabeledInput>
    </Col>
  </Row>
)

export default SearchFilter;