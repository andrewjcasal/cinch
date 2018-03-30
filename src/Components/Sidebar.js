import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

  var elements = [];
  var done = 1;
  
  if (props.pageType == "setup") {
    elements = [{
      title: 'Business Details',
      link: '/business-details',
    },{
      title: 'Legal Representative',
      link: '/legal-representative'
    },{
      title: 'Proof of ID',
      link: '/proof-of-id'
    },{
      title: 'Bank Information',
      link: '/bank-information'
    },{
      title: 'Payment Method',
      link: '/payment-method'
    },{
      title: 'Administrators',
      link: '/administrators'
    }];
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
      <a href={elements[i].link} className={props.active == i && "active"}>{elements[i].title} <span class={ done < i ? "not-done" : "done"}></span></a>
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