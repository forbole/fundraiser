import React, { Component } from 'react';
// import { STATES } from 'meteor/std:accounts-ui';
import LoginForm from './LoginForm.jsx';

import {
    Container, Row, Col,
    Card, CardBody,
    CardTitle
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    // Nav,
    // NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
} from 'reactstrap';

export default class Login extends Component{
    render(){
        return <Container fluid id="login-container">
            <Row>
                <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <h1>Forbole Fundraiser</h1>
                    <Card className="border-secondary">
                        <CardBody>
                            <CardTitle className="text-primary">Plese login/register to continue</CardTitle>
                            <LoginForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    }
}
