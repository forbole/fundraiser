import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
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
import Home from './Home.js'
import Balance from './Balance.js'
import Login from './Login.js'

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

   render(){
        return (
          <Router>
            <Container fluid={true}>
              <Navbar color="danger" dark expand="md">
                <NavbarBrand tag={Link} to="/">Forbole Fundraiser</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/balance">Balance</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Container>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={() => <Accounts.ui.LoginForm />} />
                <Route path="/balance" component={Balance} />
              </Container>
            </Container>
          </Router>
        );
      }
}