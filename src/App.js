import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'jquery'
import Registrations from './Pages/Registrations';
import Divisions from './Pages/Divisions';
import Family from './Pages/Family';
import OrderHistory from './Pages/OrderHistory';
import Documents from './Pages/Documents';
require('bootstrap/dist/css/bootstrap.css');
require('./App.css');

const Home = () => <h1>Home</h1>

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/registrations" component={Registrations} />
      <Route path="/divisions" component={Divisions} />
      <Route path="/family" component={Family} />
      <Route path="/order-history" component={OrderHistory} />
      <Route path="/documents" component={Documents} />
    </div>
  </Router>
);

export default App;
