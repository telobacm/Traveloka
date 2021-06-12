import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Traveloka</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Transportasi" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Pesawat</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Kereta</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.3">Delman</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Penginapan" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">Hotel</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">Emper Mesjid</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
