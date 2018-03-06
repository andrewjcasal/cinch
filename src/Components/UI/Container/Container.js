import React from 'react';
import Menubar from '../../../containers/MenuBar/MenuBar';
import Navbar from '../../../containers/NavBar/NavBar';


require('bootstrap/dist/css/bootstrap.css');
require('../../../containers/App/App.css');

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
            {props.children}
          </div>
        </div>
      </div> )
  }
};

export default Container;