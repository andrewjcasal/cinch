import React from 'react';
import Menubar from '../../../containers/MenuBar/MenuBar';
import Navbar from '../../../containers/NavBar/NavBar';
import BodyColor from '../BodyColor/BodyColor';


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
      <BodyColor isGray="true">
        <div className="App">
          <Menubar />
          <div className="content-container">
            <Navbar />
            <div className="wrapper">
              {layout}
            </div>
          </div>
        </div>
      </BodyColor> )
  }
};

export default Container;