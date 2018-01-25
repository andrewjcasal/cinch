import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menubar from './Menubar';
import Navbar from './Navbar';
import ProgramSteps from './ProgramSteps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <div className="content-container">
          <Navbar />
          <div className="wrapper">
            <ProgramSteps />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
