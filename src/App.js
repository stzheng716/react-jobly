import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import NavBar from './NavBar';

/** App component.
 *
 * Renders NavBar and RouteList
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
