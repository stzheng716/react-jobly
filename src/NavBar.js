import React from "react";
import { NavLink } from "react-router-dom";

/** NavBar component.
 *
 * App -> NavBar
 * 
 * Renders links to home, companies, and jobs
 */
function NavBar(){
    return (
        <nav>
            <NavLink to="/">Jobly</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
        </nav>
    )
}

export default NavBar;