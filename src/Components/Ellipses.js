import React from 'react';
import EllipsesIcon from '../assets/images/ellipses.png';
import {Popover, OverlayTrigger} from 'react-bootstrap';

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <div>
      Edit
    </div>
    <div>
      Delete
    </div>
  </Popover>
);

const Ellipses = () => {
  return ( 
    <OverlayTrigger trigger="click" placement="right" rootClose overlay={popoverRight}>
      <a href="javascript:;"
        className="ellipses-container">
        <img src={EllipsesIcon} />
      </a>
    </OverlayTrigger> )
}

export default Ellipses;