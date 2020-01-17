import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  let [ball, setBall] = useState(0);
  let [strike, setStrike] = useState(0);
  let [foul, setFoul] = useState(0);
  let [hit, setHit] = useState(false);



  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Display ball={ball} strike={strike} foul={foul} hit={hit}/>
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit}
      setBall={setBall} setStrike={setStrike} setFoul={setFoul} setHit={setHit}/>
    </div>
  );
}

export default App;
