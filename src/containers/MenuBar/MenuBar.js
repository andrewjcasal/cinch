import React, { Component } from 'react';
import MenuItems from '../../Components/MenuItems/MenuItems'
require('./MenuBar.css');

class MenuBar extends Component {
  state = {
    active: null
  }

  render() {
    return (
      <div className="menubar">
        <MenuItems />
      </div>
    );
  }
}

export default MenuBar;
