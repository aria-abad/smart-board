import Navbar from './components/Navbar'
import Home from './components/Home';
import useFetch from './components/useFetch';
// import {v4 as uuidv4} from 'uuid';

function App() {
  const {data: projects, isLoading, error} = useFetch('http://localhost:8000/projects');

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