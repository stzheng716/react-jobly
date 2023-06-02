import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import userContext from "./userContext";
import { Button } from "react-bootstrap";

import "./Navbar.css";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */
//TODO: see if we can make NavLink active
function NavBar({ handleLogout }) {
  const { user } = useContext(userContext);

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <Nav className="ms-auto">
              <Nav.Link href="/companies">Companies </Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Nav.Link href="/profile">Profile </Nav.Link>
              <Button variant="outline-primary" href="/logout" onClick={handleLogout}>
                Logout {user.username}
              </Button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
