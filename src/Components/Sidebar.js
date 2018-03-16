import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

  var elements = [];
  
  if (props.pageType == "setup") {
    elements = [
      'Business Details',
      'Legal Representative',
      'Proof of ID',
      'Bank Information',
      'Payment Method',
      'Administrators'
    ]
  } else if (props.pageType == "admin") {
    elements = [
      'Household',
      'Players',
      'Coaches',
      'Referees'
    ]
  }

  var rows = [];
  
  for (var i = 0; i < elements.length; i++) {
    rows.push(<li>
      <a href="#" className={props.active == i && "active"}>{elements[i]} <span class="done"></span></a>
    </li>)
  }

  return (
    <div class="sidebar section">
      <ul>
        {rows}
      </ul>
    </div>
  )}

export default Sidebar;