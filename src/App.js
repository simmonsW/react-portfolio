import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [ navChoice, setNavChoice ] = useState('about');

  const navSelect = () => {
    switch (navChoice) {
      case 'about-me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    };
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header navChoice={navChoice} setNavChoice={setNavChoice}></Header>
        <div>
          <main>
            {navSelect()}
          </main>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
