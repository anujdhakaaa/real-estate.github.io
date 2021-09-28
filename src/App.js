import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Mainbody from './Components/Mainbody';
import Register from './Components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
    <> 
   <Router>
   <Navbar/>
    <Mainbody/>
    {/* <Register/> */}
    
    <Switch>
          <Route path="/home">
            <Mainbody />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          
        </Switch>

    </Router>
    </>
  );
}

export default App;
