import React, { Component } from 'react';
import Menubar from '../../../containers/MenuBar/MenuBar';
import Navbar from '../../../containers/NavBar/NavBar';
require('bootstrap/dist/css/bootstrap.css');
require('../../../containers/App/App.css');

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