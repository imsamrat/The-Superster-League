import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Home/Header/Header';
import LeaguesDetails from './components/Home/LeaguesDetails/LeaguesDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <LeaguesDetails />
        </Route>

        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
        
      </Switch>

      {/* <Footer /> */}
    </Router>
    
  );
}

export default App;
