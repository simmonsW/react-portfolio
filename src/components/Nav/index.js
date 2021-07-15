import React from 'react';

function Nav(props) {

  const { navChoice, setNavChoice } = props;

  return (
    <nav>
      <ul>
        <li key="1" className={navChoice === 'about-me' ? 'navActive' : undefined}>
          <a href="#about-me" onClick={() => setNavChoice('about-me')}>About Me</a>
        </li>
        <li key="2" className={navChoice === 'portfolio' ? 'navActive' : undefined}>
          <a href="#portfolio" onClick={() => setNavChoice('portfolio')}>Portfolio</a>
        </li>
        <li key="3" className={navChoice === 'resume' ? 'navActive' : undefined}>
          <a href="#resume" onClick={() => setNavChoice('resume')}>Resume</a>
        </li>
        <li key="4" className={navChoice === 'contact' ? 'navActive' : undefined}>
          <a href="#contact" onClick={() => setNavChoice('contact')}>Contact</a>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;