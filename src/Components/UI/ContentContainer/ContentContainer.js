import React from 'react';
require('./ContentContainer.css');

const ContentContainer = (props) => (
  <div className={props.type + " Content-Container"}>
    {props.top}
    {props.left &&
      <div className="content-left">
        {props.left}
      </div>}
    {props.right &&
      <div className="content-right">
        {props.right}
      </div>
    }
    {props.children}
  </div>
)

export default ContentContainer;