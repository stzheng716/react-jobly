import React, { useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";

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
      <h1>Jobly!</h1>
      <p>All the jobs in one, convenient place.</p>
      {user ? (
        <p>Welcome Back, {user.firstName}!</p>
      ) : (
        <div>
          <button onClick={redirectToLogIn}>Log in</button>{" "}
          <button onClick={redirectToSignUp}>Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Home;
