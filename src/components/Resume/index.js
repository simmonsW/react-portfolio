import React from 'react';

function Resume() {

  const proficiencyArr = [
    'Javascript',
    'HTML/CSS',
    'Node.js',
    'React'
  ];

  const pastExperienceArr = [
    'Express.js',
    'MongoDB',
    'MySQL',
    'Sequelize',
    'GraphQL',
  ];

  return(
    <section className="resume-page">
      <div>
        <h1 id="resume-title">
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
        <h2 className="prof-list-title">
          Past Experience
        </h2>
        <ul className="prof-list">
          {pastExperienceArr.map((prof, index) => (
            <li key={index} className="prof">
              {prof}
            </li>
          ))}
        </ul>
        <a
          href={require('../../assets/resume/wyatt-simmons-resume.pdf').default}
          target="_blank"
          rel="noreferrer"
          download="wyatt-simmons-test-resume.pdf"
        >
          <h3 className="resume-download">
            Download Resume
          </h3>
        </a>
      </div>
    </section>
  )
};

export default Resume;