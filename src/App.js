import {useState} from 'react';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [projects, setProjects] = useState([
    {id: uuidv4(), priority: 3, cycle: 'SSU28', instrument: 'C x4', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'with owner', contact:'Halie'},
    {id: uuidv4(), priority: 1, cycle: 'SSU2', instrument: 'Xi T 1-6 (Green)', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'', contact:'Aparna'},
    {id: uuidv4(), priority: 2, cycle: '(4)/5', instrument: 'S (Gen 11)', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'waiting for pickup', contact:'David M.'}
  ])

  const handleDelete = (id) => {
    const newProjects = projects.filter(project => project.id !== id);
    setProjects(newProjects);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Projects projects = {projects} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;