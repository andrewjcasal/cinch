import React, { Component } from 'react';
import Arsenal from '../../assets/images/programs/Arsenal_FC_lg.png';
import DropdownCaret from '../../assets/images/dropdown.png';
require('./NavBar.css');

class NavBar extends Component {
  constructor(props) {
    super(props) 

    this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = (body) => {
    console.log('body (╯°□°)╯︵ ┻━┻ ', body)
  }

  render() {
    return (
      <div className="Navbar">
        <div className="group-logo">
          <img src={Arsenal} />
          <p>Arsenal FC</p>
        </div>
        <div className="profile-info">
          <div onClick={this.handleFormSubmit} className="nameplate">
            Tony Alvarez
          </div>
          <img className="avatar" src="" />
          <img className="dropdown-icon" src={DropdownCaret} />
        </div>
      </div>
    );
  }
}

export default NavBar;

    