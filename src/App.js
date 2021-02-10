import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ProjecList from './components/ProjecList';
// import {v4 as uuidv4} from 'uuid';

function App() {

  const [projects, setProjects] = useState([
    {id: 1, priority: 3, cycle: 'SSU28', instrument: 'Cadiere x4', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'with owner', contact:'Halie'},
    {id: 2, priority: 1, cycle: 'SSU2', instrument: 'Xi Tenaculum 1-6 (Green)', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'', contact:'Aparna'},
    {id: 3, priority: 2, cycle: '(4)/5', instrument: 'Skywalker LND (Gen 11)', autoclave: 'WO', completion: {soak: '--', medisafe:'--', autoclave:'--'}, note:'waiting for pickup', contact:'David M.'}
  ])

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ProjecList projects={projects} />
      </div>      
    </div>
  );
}

export default App;