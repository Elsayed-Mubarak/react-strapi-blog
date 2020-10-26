import React from 'react';
import { Nav, Button, Navbar, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
export default function NavBar() {

    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Kware-Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/galary">Galary</Nav.Link>
                        <NavDropdown title="Channels" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Libarary Search Key</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Artificial Intelligence</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Digital Repository And Archive</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Publish Books</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Digital Libarary</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Translate</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Button  variant="outline-success" href="/create">Create Articel </Button>

                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}
