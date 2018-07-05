import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

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

    logout() {
        Meteor.logout();
    }

    render(){
        return <div>
            <ToastContainer />
            <Navbar color="primary" dark expand="md">
                <NavbarBrand tag={Link} to="/">Forbole Fundraiser</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {(this.props.emailVerified)?<NavItem>
                            <NavLink tag={Link} to="/balance">Balance</NavLink>
                        </NavItem> : ''}
                        <NavItem>
                            <NavLink tag={Link} to="#" onClick={this.logout} >Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }
}

