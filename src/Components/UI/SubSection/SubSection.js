import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
require('./SubSection.css');

const SubSection = (props) => (
  <div class="subsection">
    <div class="heading">{props.heading}
      {props.all && 
        <div className="left-buttons">
          <Dropdown title="ALL" />
        </div>}
      {props.children}
    </div>
  </div>
)

export default SubSection;