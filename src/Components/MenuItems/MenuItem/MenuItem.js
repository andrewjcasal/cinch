import React from 'react';
import { NavLink } from 'react-router-dom';

require('./MenuItem.css')

const menuItem = (props) => (
  <li className={ 'MenuItem ' + props.linkType + ' ' + props.active}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName='active' >
      {props.children}
    </NavLink>
  </li>
);

export default menuItem;