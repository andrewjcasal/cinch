import React, { Component } from 'react';
import MenuItems from '../../Components/MenuItems/MenuItems';
import linkLibrary from './linkLibrary';

require('./MenuBar.css');

class MenuBar extends Component {
  // super(props) when auth is hooked up.
  //super(props)
  constructor(props){
    super(props);
    this.state = {
      admin: [ 1, 2, 3, 4, 5, 6, 7 ],
      role: 'admin',
      links: linkLibrary,
      active: false
    }
  }

  handlePermissions = (role) => {
    let permissions = []
    role.forEach((linkName) => {
       permissions.push(this.state.links[linkName])
    })
    return permissions
  }

  render() {
    return (
      <div className="menubar">
        <MenuItems 
          menuPermissions={this.handlePermissions(this.state[this.state.role])} 
          activeLink={this.state.active} />
      </div>
    );
  }
}

export default MenuBar;
