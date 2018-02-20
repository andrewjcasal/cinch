import React from 'react';
require('./FooterButtons.css');

const FooterButtons = (props) => (
  <div className="footer-buttons">
    {props.save &&
      <button className="save-button">SAVE</button>
    }
    {props.cancel &&
      <button className="cancel-button">CANCEL</button>
    }
    {props.next &&
      <button className="next-button">NEXT</button>
    }
  </div>
)

export default FooterButtons;