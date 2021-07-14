import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [ navChoice, setNavChoice ] = useState('about');

  return (
    <div className="App">
      <Header navChoice={navChoice} setNavChoice={setNavChoice}></Header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
