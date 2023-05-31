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
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/companies">Companies </Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
          </Nav>
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
