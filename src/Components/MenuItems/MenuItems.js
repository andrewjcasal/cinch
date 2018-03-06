import React from 'react';
import MenuItem from './MenuItem/MenuItem';

require('./MenuItems.css');

const menuItems = (props) => (
  <ul className={'MenuItems'}>
    <MenuItem clicked={props.navigation} linkType='logo' link="/"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='hamburger' link="/organizations"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='home' link="/organizations"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='world' exact link="/organizations"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='profile' link="/"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='money' link="/"></MenuItem>
    <MenuItem clicked={props.navigation} linkType='settings' link="/"></MenuItem>
  </ul>
);

export default menuItems;