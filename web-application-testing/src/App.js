import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';

function App() {
  const [atBat, setAtBat] = useState();

  let hit, foul, balls, strikes = 0;


  if(strikes >= 3 || balls >= 4){
    balls = 0;
    strikes = 0;
  }

  if(foul){
    if(strikes === 2){
      return strikes;
    } else
    strikes += 2;
  }

  if(hit){
    balls = 0;
    strikes = 0;
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Display />
    </div>
  );
}

export default App;
