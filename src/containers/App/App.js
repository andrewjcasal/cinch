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
        <Route path="/registrations" component={Registrations} />
        <Route path="/programs" component={Programs} />
        <Route path="/create-program-documents" component={CreateProgramDocuments} />
        <Route path="/create-program" exact component={CreateProgram} />
        <Route path="/divisions" component={Divisions} />
        <Route path="/family" component={Family} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/documents" component={Documents} />
      </Switch>
    </div>
  </Router>
);

export default App;
