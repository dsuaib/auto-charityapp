import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App';
import MemberLayout from "./MemberLayout"
import Donate from "./Donate"
import RegisterMember from "./RegisterMember"
import Login from "./Login"
import CreateAnnouncement from "./CreateAnnoucement"
import Pricing from "./Donate2"
import MemberInfo from "./MemberInfo"
import Confirmation from "./Confirmation"
import ContactUs from './ContactUs'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/pricing" component={Pricing}/>
      <Route exact path="/memberlayout" component={MemberLayout}/>
      <Route exact path="/donate" component={Donate}/>
      <Route exact path="/register" component={RegisterMember}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/announcement" component={CreateAnnouncement}/>
      <Route exact path="/confirmation" component={Confirmation}/>
      <Route exact path="/contactus" component={ContactUs}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
