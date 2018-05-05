import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'jquery'
import Index from '../../Pages/Index';
import BusinessDetails from '../../Pages/BusinessDetails';
import LegalRepresentative from '../../Pages/LegalRepresentative';
import ProofOfId from '../../Pages/ProofOfId';
import BankInformation from '../../Pages/BankInformation';
import PaymentMethod from '../../Pages/PaymentMethod';
import Administrators from '../../Pages/Administrators';
import Programs from '../../Pages/Programs';
import CreateProgram from '../../Pages/CreateProgram';
import CreateProgramDocuments from '../../Pages/CreateProgramDocuments';
import Divisions from '../../Pages/Divisions';
import Welcome from '../../Pages/Welcome';
import Buttons from '../../Pages/Buttons';
import Registrations from '../../Pages/Registrations';
import Family from '../../Pages/Family';
import OrderHistory from '../../Pages/OrderHistory';
import Documents from '../../Pages/Documents';
import Questions from '../../Pages/Questions';
import Landing from '../../Pages/Landing';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import SearchResults from '../../Pages/SearchResults';
import ProgramDetail from '../../Pages/ProgramDetail';
import AdminLogin from '../../Pages/AdminLogin';
import Dashboard from '../../Pages/Dashboard';
import Organizations from '../../Pages/Organizations';
import Users from '../../Pages/Users';
import HomeDashboard from '../../Pages/HomeDashboard';
require('bootstrap/dist/css/bootstrap.css');
require('./App.css');

const App = () => (
  <Router>
    <div>
      <Switch>

        {/* Index */}
        <Route exact path="/" component={Index} />

        {/*Landing*/}
        <Route path='/landing' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/search-results' component={SearchResults} />
        <Route path='/program-detail' component={ProgramDetail} />

        {/* Setup */}
        <Route path="/business-details" component={BusinessDetails} />
        <Route path="/legal-representative" component={LegalRepresentative} />
        <Route path="/proof-of-id" component={ProofOfId} />
        <Route path="/bank-information" component={BankInformation} />
        <Route path="/payment-method" component={PaymentMethod} />
        <Route path="/administrators" component={Administrators} />

        {/* Programs */}
        <Route path="/programs" component={Programs} />
        <Route path="/create-program-documents" component={CreateProgramDocuments} />
        <Route path="/create-program" exact component={CreateProgram} />
        <Route path="/questions" component={Questions} />
        <Route path="/divisions" component={Divisions} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/buttons" component={Buttons} />

        {/* Registrations */}
        <Route path="/registrations" component={Registrations} />

        {/* Home */}
        <Route path="/home" component={HomeDashboard} />

        {/* Households */}
        <Route path="/family" component={Family} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/documents" component={Documents} />

        {/* Admin */}
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/organizations" component={Organizations} />
        <Route path="/users" component={Users} />

      </Switch>
    </div>
  </Router>
);

export default App;
