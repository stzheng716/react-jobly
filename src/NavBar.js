import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */
//TODO: see if we can make NavLink active
function NavBar({ handleLogout }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {(user) ?
            <Nav className="ms-auto">
              <Nav.Link to="/companies">Companies </Nav.Link>
              <Nav.Link to="/jobs">Jobs</Nav.Link>
              <Nav.Link to="/profile">Profile </Nav.Link>
              <Nav.Link to="/logout" onClick={handleLogout}>logout</Nav.Link>
            </Nav>
            :
            <Nav className="ms-auto">
              <Nav.Link to="/login">login</Nav.Link>
              <Nav.Link to="/signup">Sign Up</Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

{
  /* <nav>
<NavLink to="/">Jobly</NavLink>
<NavLink to="/companies">Companies</NavLink>
<NavLink to="/jobs">Jobs</NavLink>
</nav> */
}

export default NavBar;
