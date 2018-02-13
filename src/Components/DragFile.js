import React, { Component } from 'react';
require('./DragFile.css');

const DragFile = (props) => (
  <div class="Drag-File">
    <div>
      <p>Drag a file here or <a href="#">Browse</a> to upload</p>
    </div>
    <p>{props.label}</p>
  </div>
)

export default DragFile;