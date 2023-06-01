import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import userContext from "./userContext";

/** NavBar component.
 *
 * App -> NavBar
 *
 * Renders links to home, companies, and jobs
 */
//TODO: see if we can make NavLink active
function NavBar({ handleLogout }) {

  const user = useContext(userContext)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Jobly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {(user) ?
            <Nav className="ms-auto">
              <NavLink to="/companies">Companies </NavLink>
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/profile">Profile </NavLink>
              <NavLink to="/logout" onClick={handleLogout}>logout</NavLink>
            </Nav>
            :
            <Nav className="ms-auto">
              <NavLink to="/login">login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
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
