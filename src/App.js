import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
// import {v4 as uuidv4} from 'uuid';

function App() {

  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then(res => {
        if(!res.ok){
          throw Error('Could not Fetch the projects from the resource');
        }
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setIsLoading(false);
        setError(null)
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="Home">
      <Navbar />
      <div className="content">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {projects && <Home projects = {projects} />}
      </div>
    </div>
  );
}

export default App;