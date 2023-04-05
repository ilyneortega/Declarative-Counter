
import './App.css';

import React, { useState } from 'react';

function App() {

  let [ counterNum, setCounterNum ] = useState(0)
  window.setCounterNum = setCounterNum
  return (
    <div className="App">
      <header className="App-header">

        <p>
            {counterNum}        
        </p>

      </header>
      <button onClick= {() => setCounterNum + 1} className='add-num'>Add</button>
      <button onClick= {() => setCounterNum - 1} className='subract-num'>Subtract</button>

    </div>
  );
}

export default App;
