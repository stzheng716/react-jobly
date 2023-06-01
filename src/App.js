import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

/** App component.
 *
 * Renders NavBar and RouteList
 */
function App() {
  //double check if user should be state
  const [currUser, setUser] = useState(null)

  //add context for use 
  function handleLogIn(){

  }


  function handleSignUp(){
    
  }


  function handleUpdate(){
    
  }

  function handleLogout(){
    
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleLogout={handleLogout}/>
        <RoutesList 
          handleLogIn={handleLogIn} 
          handleSignUp={handleSignUp} 
          handleUpdate={handleUpdate}
          />
      </BrowserRouter>
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