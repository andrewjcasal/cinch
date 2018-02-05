import React, { Component } from 'react';
import Menubar from '../Menubar';
import Navbar from '../Navbar';
import ProgramSteps from '../ProgramSteps';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');

const Container = (props) => (
  <div className="App">
    <Menubar />
    <div className="content-container">
      <Navbar />
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  </div>
);

export default Container;