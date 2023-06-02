import React, { useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Home.css";

/** Home component.
 *
 * RouteList -> Home
 *
 * Renders home page with background
 */

function Home() {
  const user = useContext(userContext);
  const navigate = useNavigate();

  function redirectToLogIn() {
    navigate("/login");
  }
  function redirectToSignUp() {
    navigate("/signup");
  }

  return (
    <div className="background">
      <div>
        <h1 className="displayText">Jobly!</h1>
        <div>
          <h2 className="displayText">All the jobs in one, convenient place.</h2>
          {user.user ? (
            <h2 className="displayText">Welcome Back, {user.user.firstName}!</h2>
          ) : (
            <div>
              <Button variant="primary" onClick={redirectToLogIn}>Log in</Button>{" "}
              <Button variant="primary" onClick={redirectToSignUp}>Sign up</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
