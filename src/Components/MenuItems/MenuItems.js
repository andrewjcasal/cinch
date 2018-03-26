import React from 'react';
import MenuItem from './MenuItem/MenuItem';

require('./MenuItems.css');

const mapLinks = (props) => {
  const renderLinks = props.menuPermissions.map((link, linkIndex) => {
    return (
      <MenuItem 
        key={linkIndex}
        active={ props.activeLink == props.menuPermissions[[linkIndex][0]].linkURL ? true : false }
        linkType={props.menuPermissions[[linkIndex][0]].icon} 
        link={props.menuPermissions[[linkIndex][0]].linkURL} /> 
    )
  })
  return renderLinks
}

const menuItems = (props) => {
  return (
    <ul className='MenuItems'>
      {mapLinks(props)}
    </ul>
  )
};

export default menuItems;