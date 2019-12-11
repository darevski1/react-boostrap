import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'

const Styles = styled.div`
    .navbar {
        background-color: #182044;
    }
    .navbar-light .navbar-nav .nav-link {
        color: #fff;
    }
    .navbar-brand img {
        width:100px
        margin:-10px;
    }
`;

class NavigationBar extends Component {
    render() {
        return (
            <Styles>
                <Navbar>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="React Bootstrap logo">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/component">Components</Nav.Link>
                            <Nav.Link href="/hooks">Hooks</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default NavigationBar;