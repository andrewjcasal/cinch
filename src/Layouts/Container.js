import React from 'react';
import Menubar from '../Menubar';
import Navbar from '../Navbar';
require('bootstrap/dist/css/bootstrap.css');
require('../App.css');
require('./Container.css');

class Container extends React.Component {

  render() {
    let layout = null;

    if (this.props.left) {
      layout = (
        <div>
          <div class="left-container">
            {this.props.left}
          </div>
          <div class="right-container">
            {this.props.children}
          </div>
        </div> )
    } else {
      layout = this.props.children;
    }

    return (
      <div className="App">
        <Menubar />
        <div className="content-container">
          <Navbar />
          <div className="wrapper">
            {layout}
          </div>
        </div>
      </div> );
  }
};

export default Container;