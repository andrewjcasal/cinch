import React from 'react';
require('./ContentContainer.css');

const ContentContainer = (props) => (
  <div className="Content-Container">
    <div className="content-left">
      {props.left}
    </div>
    <div className="content-right">
      {props.right}
    </div>
    {props.children}
  </div>
)

export default ContentContainer;