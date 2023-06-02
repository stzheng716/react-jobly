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
  const [currUser, setCurrUser] = useState({ user: null, isLoading: true });
  const [token, setToken] = useState("");
  useEffect(
    function changeUser() {
      checkLocalStorage()
      getUser();
      setCurrUser({ isLoading: false });
    },
    [token]
  );

  function checkLocalStorage() {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {    
      JoblyApi.token = token;
      setToken(storageToken);
    }
  }

  /** Make a get request to api and receive and set a current user*/
  async function getUser() {
    // checkLocalStorage();
    if (token) {
      const { username } = jwt_decode(token);
      console.log("USERNAME", username);
      const user = await JoblyApi.getUser(username);
      setCurrUser({ user: user, isLoading: false });
    }
  }

  /** Make a login request to api and receive and set a token*/
  async function handleLogIn({ username, password }) {
    const token = await JoblyApi.login(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    JoblyApi.token = token;
  }

  /** Make a sign up request to api and receive and set a token*/
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
    localStorage.setItem("token", token);
    setToken(token);
    JoblyApi.token = token;
  }

  /** Make a patch request to api and receive and set a current user*/
  async function handleUpdate(formData) {
    const { username, firstName, lastName, email } = formData;

    const user = await JoblyApi.updateUser(
      username,
      firstName,
      lastName,
      email
    );

    setCurrUser({ user: user, isLoading: false });
  }

  /** sets current user and token to null and empty string */
  function handleLogout() {
    setCurrUser({ user: null, isLoading: true });
    localStorage.removeItem("token");
    setToken("");
  }

  if (currUser.isLoading) return <i>Loading...</i>;

  return (
    <div className="App">
      <userContext.Provider value={currUser.user}>
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
