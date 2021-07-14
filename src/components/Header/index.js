import React from 'react';
import Nav from '../Nav';

function Header(props) {

  const { navChoice, setNavChoice } = props;

  return (
    <header>
      <h1>
        Wyatt Simmons
      </h1>
      <Nav navChoice={navChoice} setNavChoice={setNavChoice}></Nav>
    </header>
  )
}

export default Header;