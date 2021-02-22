import Navbar from './components/Navbar'
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewProject from './components/NewProject';
import ProjectDetails from './components/ProjectDetails';
import NotFound from './components/NotFound';

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
            <Route path="/projects/:id">
              <ProjectDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;