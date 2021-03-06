import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import Login from "./Login"
import CreateAnnouncement from "./CreateAnnoucement"
import Pricing from "./Donate2"
import Dashboard from "./Dashboard"
import ContactUs from './ContactUs'
import EmployeeConfirmation from './EmployeeConfirmation'
import RegisterEmployee from './RegisterEmployee'
import reportWebVitals from './reportWebVitals';
import DeleteAnnouncement from './DeleteAnnouncement';
import UpdateAnnouncement from './UpdateAnnouncement'

import { AuthProvider } from "./Auth";
import PrivateRoute from "./APrivateRoute";


ReactDOM.render(
  <AuthProvider>
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/deleteannouncement" component={DeleteAnnouncement}/>
      <PrivateRoute exact path="/createannouncement" component={CreateAnnouncement}/>
      <PrivateRoute exact path="/updateannouncement" component={UpdateAnnouncement}/>
      <PrivateRoute exact path="/employeeconfirmation" component={EmployeeConfirmation}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/registeremployee" component={RegisterEmployee}/>
      <Route exact path="/contactus" component={ContactUs}/>
    </Switch>
  </Router>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
