import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  let [atBat, setAtBat] = useState(0);
  let [ball, setBall] = useState(0);
  let [strike, setStrike] = useState(0);
  let [foul, setFoul] = useState(0);
  let [hit, setHit] = useState(0);



  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Display atBat={atBat} ball={ball} strike={strike} foul={foul} hit={hit}/>
      <Dashboard atBat={atBat} ball={ball} strike={strike} foul={foul} hit={hit}
      setAtBat={setAtBat} setBall={setBall} setStrike={setStrike} setFoul={setFoul} setHit={setHit}/>
    </div>
  );
}

export default App;
