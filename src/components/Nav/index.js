import React from 'react';

function Nav(props) {

  const { navChoice, setNavChoice } = props;

  return (
    <nav>
      <ul>
        {/* About */}
        {/* Portfolio */}
        {/* Resume */}
        {/* Contact */}
        <li className={navChoice === 'about-me' && 'navActive'}>
          <a href="#about-me" onClick={() => setNavChoice('about-me')}>About Me</a>
        </li>
        <li className={navChoice === 'portfolio' && 'navActive'}>
          <a href="#portfolio" onClick={() => setNavChoice('portfolio')}>Portfolio</a>
        </li>
        <li className={navChoice === 'resume' && 'navActive'}>
          <a href="#resume" onClick={() => setNavChoice('resume')}>Resume</a>
        </li>
        <li className={navChoice === 'contact' && 'navActive'}>
          <a href="#contact" onClick={() => setNavChoice('contact')}>Contact</a>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;