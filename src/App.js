import React from 'react';
//import logo from './assets/logo-title-dark.png';
import Counter from './containers/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
      <h1>All about Redux</h1>
      </div>
       <Counter />
    </div>
  );
}

export default App;
