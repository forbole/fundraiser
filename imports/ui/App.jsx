import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {
  Container,
 } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home.jsx'
import Balance from './Balance.jsx'
import Login from './Login.jsx'
import Header from './Header.jsx'
import VerifyEmail from './VerifyEmail.jsx'

export default class App extends Component {
   render(){
       if (Meteor.user() && !Meteor.loggingIn()){
        if (Meteor.user().emails[0].verified){
          return (
            <Router>
              <div>
                <Header emailVerified={true}/>
                <Container id="main">
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/balance" component={Balance} />
                </Container>
              </div>
            </Router>
          );
        }
        else{
          return <Router>
            <div>
              <Header emailVerified={false} />
              <Container id="main">
                <Route exact path="/" component={VerifyEmail} />
              </Container>
            </div>
          </Router>

        }
      }
      else {
        return (
          <Router>
            <div className="login-container">
              <Route exact path="/" component={Login} />
            </div>
          </Router>
        )
      }
    }
}