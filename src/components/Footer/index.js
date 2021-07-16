import React from 'react';
import { RiGithubLine, RiLinkedinBoxLine, RiStackOverflowLine } from 'react-icons/ri';

function Footer() {

  return(
    <footer>
      <a href="https://github.com/simmonsW" target="_blank" rel="noreferrer">
        <RiGithubLine />
      </a>
      <a href="https://www.linkedin.com/in/wyatt-simmons-b3068b204/" target="_blank" rel="noreferrer">
        <RiLinkedinBoxLine />
      </a>
      <a href="https://stackoverflow.com/users/story/15026334" target="_blank" rel="noreferrer">
        <RiStackOverflowLine />
      </a>
    </footer>
  )
};

export default Footer;