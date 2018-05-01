import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import CenterMenu from '../../CenterMenu';
import CalendarMenu from '../../CalendarMenu';
require('./SectionWithHeading.css');

const SectionWithHeading = (props) => (
  <div className="section">
    <div className="heading">
      {props.heading}
      <div className="left-buttons">
        {props.completed && 
          <Dropdown title="COMPLETED" /> }
        {props.bulk &&  
          <Dropdown title="BULK" /> }
        {props.active &&
          <Dropdown title="ACTIVE" /> }
      </div>
      {props.addnew && <a href="#" className="add-new button" onClick={props.addnew}>ADD NEW</a>}
      {props.createnew && <a href={props.createnew.link} className="add-new button">CREATE NEW</a>}
      {props.export && <a href="#" className="export button">EXPORT</a>}
      {props.email && <a href="#" className="email button">EMAIL</a>}
      {props.other}
      {props.centermenu && <CenterMenu />}
      {props.calendarmenu && <CalendarMenu />}
    </div>
    {props.children}
  </div>
)

export default SectionWithHeading;