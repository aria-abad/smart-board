import Navbar from './components/Navbar'
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewProject from './components/NewProject';
// import {v4 as uuidv4} from 'uuid';

function App() {

  return (
    <Router>
      <div className="Home">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <NewProject />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;