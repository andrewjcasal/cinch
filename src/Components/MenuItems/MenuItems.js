import React from 'react';

import classes from './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';

const menuItems = () => (
  <ul className={classes.MenuItems}>
    <MenuItem linkTo='logo' link="/"></MenuItem>
    <MenuItem linkTo='hamburger' link="/"></MenuItem>
    <MenuItem linkTo='home' link="/"></MenuItem>
    <MenuItem linkTo='world' link="/organizations"></MenuItem>
    <MenuItem linkTo='profile' link="/"></MenuItem>
    <MenuItem linkTo='money' link="/"></MenuItem>
    <MenuItem linkTo='settings' link="/"></MenuItem>
  </ul>
);

export default menuItems;