import React, { Component } from 'react';
require('./CenterMenu.css');

const CenterMenu = () => (
  <ul className="center-menu">
    <li>
      Active 
    </li>
    <li className="selected">
      Pending
    </li>
    <li>
      Inactive
    </li>
  </ul>
)

export default CenterMenu;