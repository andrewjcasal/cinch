import React, { Component } from 'react';
require('./Menubar.css');

class Menubar extends Component {
  render() {
    return (

      <div className="Menubar">
        <ul>
          <li className="logo">
            <a href="#"></a>
          </li>
          <li className="hamburger">
            <a href="#"></a>
          </li>
          <li className="home">
            <a href="#"></a>
          </li>
          <li className="world">
            <a href="#"></a>
          </li>
          <li className="profile">
            <a href="#"></a>
          </li>
          <li className="money">
            <a href="#"></a>
          </li>
          <li className="settings active">
            <a href="#"></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menubar;