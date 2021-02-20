import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
// import {v4 as uuidv4} from 'uuid';

function App() {

  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="Home">
      <Navbar />
      <div className="content">
        {isLoading && <div>Loading...</div>}
        {projects && <Home projects = {projects} />}
      </div>
    </div>
  );
}

export default App;