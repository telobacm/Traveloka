import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";
import "./Components.css";

function Template(props) {
  return (
    <div>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <b>Traveloka</b>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Transportasi" id="basic-nav-dropdown">
                <NavDropdown.Item>Pesawat</NavDropdown.Item>
                <NavDropdown.Item>Kereta</NavDropdown.Item>
                <NavDropdown.Item>Delman Istimewa</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Penginapan" id="basic-nav-dropdown">
                <NavDropdown.Item>Hotel</NavDropdown.Item>
                <NavDropdown.Item>Emper Mesjid</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      {props.children}
      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Traveluka Abal-Abal</h2>
      </footer>
    </div>
  );
}

export default Template;
