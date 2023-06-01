import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import userContext from "./userContext";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import JoblyApi from "./api";

/** App component.
 *
 * Renders NavBar and RouteList
 */
function App() {
  //double check if user should be state
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState("");

  //add context for use
  async function handleLogIn({ username, password }) {
    const token = await JoblyApi.login(username, password);
    setToken(token); //TODO:
  }
  console.log("🚀 ~ file: App.js:24 ~ handleLogIn ~ token:", token);

  async function handleSignUp({
    username,
    password,
    firstName,
    lastName,
    email,
  }) {
    const token = await JoblyApi.signUp(
      username,
      password,
      firstName,
      lastName,
      email
    );
    setToken(token);
  }

  async function getUser() {
    if (token) {
      const { username } = await jwt_decode(token);
      const user = await JoblyApi.getUser(username);
      setCurrUser(user);
    }
  }

  function handleUpdate() {}

  function handleLogout() {}

  //take the token and decode the payload to get username
  //find decoding frontend JWT library (JWT-decode)
  //take username and make a GET to backend for user information
  //route = /:username
  //token be dependency of useEffect
  //receive back: { username, firstName, lastName, isAdmin, jobs }
  useEffect(
    function changeUser() {
      getUser();
    },
    [token]
  );
  console.log("currUser= ", currUser);
  console.log("token outside= ", token);

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            handleLogIn={handleLogIn}
            handleSignUp={handleSignUp}
            handleUpdate={handleUpdate}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

//Sudo code

//make login form
//get username and password

//handleLogin function to call the static method from api.js

//handleSignUp function to call another static method from api.js for registering a user

//send username and password to backend (POST request to the backend)
//create a function in api.js to make POST request
//set token in api.js
//returns token to app.js

//receive token back from backend and set state for token in app.js

//useEffect to see if token changed.
//take the token and decode the payload to get username
//find decoding frontend JWT library (JWT-decode)
//take username and make a GET to backend for user information
//route = /:username
//token be dependency of useEffect
//receive back: { username, firstName, lastName, isAdmin, jobs }

//set state of current user to user information
//set the context for the user information

//use logic in our component to check the context to see if user is logged in
