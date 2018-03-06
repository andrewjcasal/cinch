import React from 'react';
require('./SectionWithHeading.css');

const SectionWithHeading = (props) => (
  <div className="table section">
    <div className="heading">
      {props.heading}
      <div className="left-buttons">
        {props.completed && 
          <div className="dropdown completed">
            <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="dropdown-label">COMPLETED</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
        {props.bulk && 
          <div className="dropdown bulk">
            <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="dropdown-label">BULK</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
        {props.active && 
          <div className="dropdown active">
            <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="dropdown-label">ACTIVE</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div> }
      </div>
      {props.addnew && <a href="#" className="add-new button">ADD NEW</a>}
      {props.createnew && <a href="#" className="add-new button">CREATE NEW</a>}
      {props.export && <a href="#" className="export button">EXPORT</a>}
      {props.email && <a href="#" className="email button">EMAIL</a>}
    </div>
    {props.children}
  </div>
)

export default SectionWithHeading;