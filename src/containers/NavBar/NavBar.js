import React, { Component } from 'react';
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
          <img src="../../assets/images/programs/Arsenal_FC_lg.png" />
          <p>Arsenal FC</p>
        </div>
        <div className="profile-info">
          <div onClick={this.handleFormSubmit} className="nameplate">
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

    