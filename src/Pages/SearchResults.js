import React from 'react';
import Logo from '../assets/images/programs/Arsenal_FC_lg.png';
import SearchListing from '../Components/SearchListing';
import SearchFilter from '../Components/SearchFilter';
import LandingNavbar from '../Components/LandingNavbar';
import Footer from '../Components/Footer/Footer';
import {Row, Col} from 'react-bootstrap';
import Button from '../Components/UI/Button/Button';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
require("../assets/stylesheets/bootstrap4.min.css");
require("./ProgramDetail.css");

const rows = [{
  name: "Winter ID Camp",
  date: "JAN. 24-28",
  location: "STUB HUB CENTER"
}, {
  name: "Miami Beach ID Camp",
  date: "JUN. 16-18",
  location: "MIAMI BEACH"
}, {
  name: "California ID Camp",
  date: "MAY 15-19",
  location: "SDSU"
}];

const main = {
  age_restriction: "Ages 5-14",
  location: "Mirasol Park"
}

const SearchResults = () => (
  <div>
    <LandingNavbar />
    <div className="detail-container">
      <SearchFilter />
      <Row>
        <Col md={12}>
          <SearchListing />
          <SearchListing />
        </Col>
      </Row>
      <Footer />
    </div>
  </div>
)

export default SearchResults;