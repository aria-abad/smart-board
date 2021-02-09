import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'

function App() {

  const [board, setBoard] = useState([
    {pCyle: "SSU28", instrumentType: "Cadiere x4", autoClaveCycle: "WO", completionTime:"W", contactPerson: "Halie"},
    {pCyle: "SSU12", instrumentType: "Refurb MSCND 13 - 22", autoClaveCycle: "WO", completionTime:"", contactPerson: "nICK"}
  ])

  return (
    <div className="App">
      <Navbar />
      <h4>React Smart Board Project</h4>
      <h5>Feb 2021</h5>
    </div>
  );
}

export default App;