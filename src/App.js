import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ProjecList from './components/ProjecList';
// import {v4 as uuidv4} from 'uuid';

function App() {

  const [board, setBoard] = useState([
    {pCyle: "SSU28", instrumentType: "Cadiere x4", autoClaveCycle: "WO", completionTime:"W", contactPerson: "Halie"},
    {pCyle: "SSU12", instrumentType: "Refurb MSCND 13 - 22", autoClaveCycle: "WO", completionTime:"", contactPerson: "nICK"}
  ])

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ProjecList />
      </div>      
    </div>
  );
}

export default App;