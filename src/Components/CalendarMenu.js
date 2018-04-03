import React, { Component } from 'react';
import CalendarIcon from '../assets/images/calendar2-icon.png';
import Ellipses from '../assets/images/ellipses.png';
require('./CalendarMenu.css');

const CalendarMenu = () => (
  <div className="calendar-menu">
    <div>
      18 Oct - 25 Oct 2016
    </div>
    <div>
      <img src={CalendarIcon} alt="Additional Dates" />
    </div>
    <div class="organizations-list-image">
      <img src={Ellipses} alt="Options" />
    </div>
  </div>
)

export default CalendarMenu;