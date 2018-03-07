import React from 'react';
import './SetupSidebar.css';

const SetupSidebar = (props) => (
  <div class="sidebar section">
    <ul>
      <li>
        <a href="#" className={props.active == 1 && "active"}>Business Details <span class="done"></span></a>
      </li>
      <li>
        <a href="#" className={props.active == 2 && "active"}>Legal Representative <span></span></a>
      </li>
      <li>
        <a href="#" className={props.active == 3 && "active"}>Proof of ID <span></span></a>
      </li>
      <li>
        <a href="#" className={props.active == 4 && "active"}>Bank Information <span></span></a>
      </li>
      <li>
        <a href="#" className={props.active == 5 && "active"}>Payment Method <span></span></a>
      </li>
      <li>
        <a href="#" className={props.active == 6 && "active"}>Administrators <span></span></a>
      </li>
    </ul>
  </div>
)

export default SetupSidebar;