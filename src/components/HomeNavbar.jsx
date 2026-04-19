import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

const HomeNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://qa.visitmydoc.in/assets/FULL%20BRAND.B5n8DRfU.png"
            alt="logo"
            className="logo-img"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link as={Link} to="/#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/#providers">
              Providers
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <div className="nav-buttons">
            <Button as={Link} to="/login" className="signup-btn">
              Login
            </Button>
            <Button as={Link} to="/signup" className="signup-btn">
              Signup
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
