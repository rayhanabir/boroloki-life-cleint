import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const {user, logOut} = useAuth();
  return (
    <>
      <Navbar expand="lg" id='navigation'>
        <Container>
          <Navbar.Brand to="/">Luxury Life</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
              <Nav.Link to="/admin">Admin</Nav.Link>
              <Nav.Link to="/event">Events</Nav.Link>
              <Nav.Link to="/dashboard">Dashboard</Nav.Link>
              {user.email ?
              <Nav.Link>
                <Button variant="danger" onClick={logOut}>LogOut</Button>
              </Nav.Link>
            
              :
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link> }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
