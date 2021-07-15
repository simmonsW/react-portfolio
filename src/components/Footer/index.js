import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { GrStackOverflow } from 'react-icons/gr';
import { RiGithubLine, RiLinkedinBoxLine, RiStackOverflowLine } from 'react-icons/ri';

function Footer() {

  return(
    <footer>
      <a href="https://github.com/simmonsW" target="_blank">
        {/* <FaGithub /> */}
        <RiGithubLine />
      </a>
      <a href="https://www.linkedin.com/in/wyatt-simmons-b3068b204/" target="_blank">
        {/* <FaLinkedin /> */}
        <RiLinkedinBoxLine />
      </a>
      <a href="https://stackoverflow.com/users/story/15026334" target="_blank">
        {/* <FaStackOverflow /> */}
        {/* <GrStackOverflow /> */}
        <RiStackOverflowLine />
      </a>
    </footer>
  )
};

export default Footer;