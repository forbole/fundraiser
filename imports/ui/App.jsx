import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home.jsx'
import Balance from './Balance.jsx'
import Login from './Login.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(){
    Meteor.logout();
  }

   render(){
      if (Meteor.user()){
        return (
          <Router>
            <div>
              <ToastContainer />
              <Navbar color="primary" dark expand="md">
                <NavbarBrand tag={Link} to="/">Forbole Fundraiser</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to="/balance">Balance</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="#" onClick={this.logout} >Logout</NavLink>
                    </NavItem>                  
                  </Nav>
                </Collapse>
              </Navbar>
              <Container>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/balance" component={Balance} />
              </Container>
            </div>
          </Router>
        );
      }
      else {
        return (
          <Router>
            <div className="login-container">
              <ToastContainer />
              <Route exact path="/" component={Login} />
            </div>
          </Router>
        )
      }
    }
}