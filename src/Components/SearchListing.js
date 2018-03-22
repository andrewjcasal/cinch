import React from 'react';
import Button from '../Components/UI/Button/Button';
import Logo from '../assets/images/programs/Arsenal_FC_lg.png';
require('./SearchListing.css');

const SearchListing = (props) => (
  <div className="SearchListing">
    <div className="avatar">
      <div className="logo"><img src={Logo} /></div>
      <div className="group-name">ARSENAL FC</div>
    </div>
    <div className="event-logistics">
      <p className="title">Soccer Camp</p>
      <p className="subtitle">July 20-24 9am-3pm</p>
      <p className="subtitle">Ages 5-14</p>
      <p className="subtitle">@ Mirasol Park</p>
    </div>
    <div className="description">
      Arsenal FC offers players a unique look into how to train the Arsenal Way.
    </div>
    <div className="price">
      $599
    </div>
    <Button clicked={console.log('hi')} btnType="black" width={232}>Select</Button>
  </div>
)

export default SearchListing;