import React from 'react';
import './App.css';

import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';

function App() {
  return (
    <div className="App">
      <h2>Frozen Department</h2>
      <FrozenDept />
      <h2>Meat Department</h2>
      <MeatDept />
      <h2>Producer Department</h2>
      <ProduceDept />
    </div>
  );
}

export default App;
