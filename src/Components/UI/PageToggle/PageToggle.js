import React from 'react';
require('bootstrap/dist/css/bootstrap.css');
require('./PageToggle.css');

const PageToggle = (props) => (
  <ul className="households-selection section">
    <li className={props.selected == "family" && "selected"}>
      <a href="/family">Family</a>
      <div></div>
    </li>
    <li className={props.selected == "order-history" && "selected"}>
      <a href="/order-history">Order History</a>
      <div></div>
    </li>
    <li className={props.selected == "documents" && "selected"}>
      <a href="/documents">Documents</a>
      <div></div>
    </li>
  </ul>
);

export default PageToggle;