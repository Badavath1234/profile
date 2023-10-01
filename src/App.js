
import './App.css';
import StudentLogin from './Components/LogIn/Login.component';
import NavBar from './Components/NavBar/Navbar.component';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <Switch>
        <Route exact path="/" component={StudentLogin} />
        <Route path="/navbar" component={NavBar} />
      </Switch>
    </Router>
  );
}

export default App;
