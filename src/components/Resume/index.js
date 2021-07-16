import React from 'react';
import { RiEqualizerFill } from 'react-icons/ri';

function Resume() {

  const proficiencyArr = [
    'Javascript',
    'CSS',
    'HTML',
    'Node.js',
    'Express.js',
    'React',
    'MongoDB',
    'MySQL',
    'Sequelize',
    'GraphQL',
  ];

  return(
    <section className="resume-page">
      <div id="resume-title">
        <h1>
          Resume
        </h1>
      </div>
      <div className="prof-list-container">
        <h2 className="prof-list-title">
          Proficiencies
        </h2>
        <ul className="prof-list">
          {proficiencyArr.map((prof, index) => (
            <li key={index} className="prof">
              {prof}
            </li>
          ))}
        </ul>
        <a
          href={require('../../assets/resume/wyatt-simmons-test-resume.pdf').default}
          target="_blank"
          download="wyatt-simmons-test-resume.pdf"
        >
          <h3>
            Download Resume
          </h3>
        </a>
      </div>
    </section>
  )
};

export default Resume;