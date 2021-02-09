import {useState} from 'react';
import './App.css';

function App() {

  const [board, setBoard] = useState([
    {pCyle: "SSU28", instrumentType: "Cadiere x4", autoClaveCycle: "WO", completionTime:"W", contactPerson: "Halie"},
    {pCyle: "SSU12", instrumentType: "Refurb MSCND 13 - 22", autoClaveCycle: "WO", completionTime:"", contactPerson: "nICK"}
  ])

  return (
    <div className="App">
      <h1>React Smart Board Project</h1>
      <h2>Aria</h2>
      <h3>Lab Project</h3>
      <h3>Feb 2021</h3>
    </div>
  );
}

export default App;
