import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import './NavigationBar.scss';
//import { Link } from 'react-router-dom';


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Container className='navContainer'>
                    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                    <Navbar.Brand href="/"><h1>CyberZone</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Features</Nav.Link>
                            <Nav.Link href="/">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/add">Add</Nav.Link>
                            <Nav.Link href="/update">Update</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>                
                </Container>
            </div>
        );
    }
}

export default NavigationBar;