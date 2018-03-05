import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'jquery'
import BusinessDetails from './Pages/BusinessDetails';
import LegalRepresentative from './Pages/LegalRepresentative';
import ProofOfId from './Pages/ProofOfId';
import BankInformation from './Pages/BankInformation';
import PaymentMethod from './Pages/PaymentMethod';
import Programs from './Pages/Programs';
import CreateProgram from './Pages/CreateProgram';
import CreateProgramDocuments from './Pages/CreateProgramDocuments';
import Questions from './Pages/Questions';
import Divisions from './Pages/Divisions';
import Welcome from './Pages/Welcome';
import Buttons from './Pages/Buttons';
import Registrations from './Pages/Registrations';
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
      <Route path="/business-details" component={BusinessDetails} />
      <Route path="/legal-representative" component={LegalRepresentative} />
      <Route path="/proof-of-id" component={ProofOfId} />
      <Route path="/bank-information" component={BankInformation} />
      <Route path="/payment-method" component={PaymentMethod} />
      <Route path="/programs" component={Programs} />
      <Route path="/create-program" component={CreateProgram} />
      <Route path="/create-program-documents" component={CreateProgramDocuments} />
      <Route path="/questions" component={Questions} />
      <Route path="/divisions" component={Divisions} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/family" component={Family} />
      <Route path="/order-history" component={OrderHistory} />
      <Route path="/documents" component={Documents} />
    </div>
  </Router>
);

export default App;
