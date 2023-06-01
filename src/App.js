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
  const [user, setUser] = useState(null)

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
