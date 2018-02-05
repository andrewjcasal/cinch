import React, { Component } from 'react';
require('./SectionWithHeading.css');

const SectionWithHeading = (props) => (
  <div class="table section">
    <div className="heading">
      {props.heading}
      <div class="left-buttons">
        {props.completed && 
          <div class="dropdown completed">
            <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="dropdown-label">COMPLETED</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
        {props.bulk && 
          <div class="dropdown bulk">
            <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="dropdown-label">BULK</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
        {props.active && 
          <div class="dropdown active">
            <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="dropdown-label">ACTIVE</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
      </div>
      {props.addnew && <a href="#" class="add-new button">ADD NEW</a>}
      {props.export && <a href="#" class="export button">EXPORT</a>}
      {props.email && <a href="#" class="email button">EMAIL</a>}
    </div>
    {props.children}
  </div>
)

export default SectionWithHeading;