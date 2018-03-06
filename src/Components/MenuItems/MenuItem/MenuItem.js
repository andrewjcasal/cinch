import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './MenuItem.css';

const menuItem = (props) => (
  <li className={props.linkTo + ' ' + classes.MenuItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}>{props.children}
    </NavLink>
  </li>
);

export default menuItem;