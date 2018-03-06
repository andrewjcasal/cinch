import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'jquery'
import Programs from '../../Pages/Programs';
import CreateProgram from '../../Pages/CreateProgram';
import CreateProgramDocuments from '../../Pages/CreateProgramDocuments';
import Divisions from '../../Pages/Divisions';
import Registrations from '../../Pages/Registrations';
import Family from '../../Pages/Family';
import OrderHistory from '../../Pages/OrderHistory';
import Documents from '../../Pages/Documents';
import Organizations from '../../Pages/Organizations';
require('bootstrap/dist/css/bootstrap.css');
require('./App.css');

const Home = () => <h1>Home</h1>

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registrations" component={Registrations} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/create-program-documents" component={CreateProgramDocuments} />
        <Route exact path="/create-program" exact component={CreateProgram} />
        <Route exact path="/divisions" component={Divisions} />
        <Route exact path="/family" component={Family} />
        <Route exact path="/organizations" component={Organizations} />
        <Route exact path="/order-history" component={OrderHistory} />
        <Route exact path="/documents" component={Documents} />
      </Switch>
    </div>
  </Router>
);

export default App;
