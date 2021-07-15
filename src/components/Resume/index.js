import React from 'react';

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
          {proficiencyArr.map(prof => (
            <li key={prof.index} className="prof">
              {prof}
            </li>
          ))}
        </ul>
        <a href="https://www.google.com">
          <h3>
            Download Resume
          </h3>
        </a>
      </div>
    </section>
  )
};

export default Resume;