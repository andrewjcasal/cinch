import React from 'react';
import Logo from '../assets/images/programs/Arsenal_FC_lg.png';
import ListGroupItem from '../Components/ListGroupItem/ListGroupItem';
import SearchFilter from '../Components/SearchFilter';
import LandingNavbar from '../Components/LandingNavbar';
import Footer from '../Components/Footer/Footer';
import {Row, Col} from 'react-bootstrap';
import Button from '../Components/UI/Button/Button';
import LabeledInput from '../Components/UI/LabeledInput/LabeledInput';
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

const ProgramDetail = () => (
  <div>
    <LandingNavbar />
    <div className="detail-container" style={{width: "1182px", margin: "0 auto"}}>
      <SearchFilter />
      <Row>
        <Col md={8}>
          <div class="card mb-3 detail-program-detail" style={{borderRadius: 0}}>
            <div class="card-body text-center">
              <img src="../images/Arsenal_FC.svg.png" style={{marginTop: "15px"}} alt="Arsenal" />
              <p class="card-title light-montserrat text-uppercase pt-4">Arsenal FC</p>
              <p class="card-text text-uppercase pb-0 mb-0 pt-4 light-montserrat title">arsenal soccer schools</p>
              <p class="card-text text-uppercase pb-4 light-montserrat title">palm beach, fl - day camp </p>
              <p class="card-text xlight-montserrat details">July 20-24 9am-3pm</p>
              <p class="card-text xlight-montserrat details">{main.age_restriction}</p>
              <p class="card-text xlight-montserrat details">@ {main.location}</p>
              <p class="card-text xlight-montserrat main-details">Through our exclusive partnership with Arsenal, our Elite Soccer camps give players unique and privileged access to some
              of the best coaches and coaching methods in the modern game. Players will improve their technical ability through
              tried and trusted drills, exercises and scrimmages based on the same philosophy used by the clubs themselves, all
              under the watchful eye of official Arsenal soccer coaches.</p>
              <p class="card-text xlight-montserrat" style={{marginBottom: "8px", color: "rgb(127,127,127)", letterSpacing: ".1pt", fontSize: "13pt", padding: "20px 15px"}}>The camps can accommodate all skill levels and players are grouped together based on ability in order to improve tactical,
              technical and physical ability. Together with players from all over the US and around the world players hone their
              skills in a fun and supportive environment for a rewarding experience for all. Kick off your summer with us and
              go home a better player!</p>
              <p class="card-text light-montserrat" style={{fontSize: "14pt", paddingBottom: "20px", paddingRight: "6px", letterSpacing: "1.5pt"}}> $599</p>
              <Button btnType="black" width={232}>REGISTER</Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <ul class="list-group">
            <ListGroupItem options={rows[0]} />
            <ListGroupItem options={rows[1]} />
            <ListGroupItem options={rows[2]} />
          </ul>
        </Col>
      </Row>
      <Footer />
    </div>
  </div>
)

export default ProgramDetail;