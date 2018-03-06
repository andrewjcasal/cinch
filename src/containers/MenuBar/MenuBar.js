import React, { Component } from 'react';
import MenuItems from '../../Components/MenuItems/MenuItems'
require('./MenuBar.css');

class MenuBar extends Component {
  menuItemClicked = () => {
    console.log('event.target (╯°□°)╯︵ ┻━┻ ')
  }

  render() {
    return (
      <div className="menubar">
        <MenuItems navigation={this.menuItemClicked}/>
      </div>
    );
  }
}

export default MenuBar;
