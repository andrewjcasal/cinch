import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="group-logo">
          <img src="../../assets/images/programs/Arsenal_FC_lg.png" />
          <p>Arsenal FC</p>
        </div>
        <div className="profile-info">
          <div className="nameplate">
            Tony Alvarez
          </div>
          <img className="avatar" src="" />
          <img className="dropdown" src="../../assets/images/dropdown.png" />
        </div>
      </div>
    );
  }
}

export default NavBar;

    