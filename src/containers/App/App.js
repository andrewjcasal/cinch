import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuBar from '../MenuBar/MenuBar';
import NavBar from '../NavBar/NavBar';
import ProgramSteps from '../ProgramSteps/ProgramSteps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <div className="content-container">
          <NavBar />
          <div className="wrapper">
            <ProgramSteps />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
