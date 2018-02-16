import React, { Component } from 'react';
const ContentContainer = (props) => (
  <div>
    <div class="content-left">
      {props.left}
    </div>
    <div class="content-right">
      {props.right}
    </div>
  </div>
)

export default ContentContainer;