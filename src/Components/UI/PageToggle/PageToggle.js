import React, { Component } from 'react';
import Menubar from '../../../containers/MenuBar/MenuBar';
import Navbar from '../../../containers/NavBar/NavBar';
require('bootstrap/dist/css/bootstrap.css');
require('./PageToggle.css');

const PageToggle = (props) => (
  <ul className="households-selection section">
    <li className={props.selected == "family" && "selected"}>
      <a href="#">Family</a>
      <div></div>
    </li>
    <li className={props.selected == "order-history" && "selected"}>
      <a href="#">Order History</a>
      <div></div>
    </li>
    <li className={props.selected == "documents" && "selected"}>
      <a href="#">Documents</a>
      <div></div>
    </li>
  </ul>
);

export default PageToggle;