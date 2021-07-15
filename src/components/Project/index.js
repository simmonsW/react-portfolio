import React, { useState } from 'react';
import { GrLaunch } from 'react-icons/gr';
import { RiGitRepositoryLine } from 'react-icons/ri';

const Project = ({ name }) => {
  const [projects] = useState([
    {
      id: 1,
      projectName: 'Pawpals',
      projDesc: "A social platform to find furry friends for your pets!",
      deployedProj: 'https://noemiegrau.github.io/pawpals/',
      githubRepo: 'https://github.com/Noemiegrau/pawpals',
    },
    {
      id: 2,
      projectName: 'Rate My Ride',
      projDesc: "A social platform for users to show off their car and check out other user's cars",
      deployedProj: 'https://rate-my-ride.herokuapp.com/',
      githubRepo: 'https://github.com/albertjly/rate-my-ride'
    },
    {
      id: 3,
      projectName: 'Weather Dashboard',
      projDesc: 'A weather app where users can search for weather based on a city, and searched cities are saved to search again.',
      deployedProj: 'https://simmonsw.github.io/weather-dashboard/',
      githubRepo: 'https://github.com/simmonsW/weather-dashboard'
    },
    {
      id: 4,
      projectName: 'Work Day Scheduler',
      projDesc: 'A schedule app for users to plan their work day',
      deployedProj: 'https://simmonsw.github.io/work-day-scheduler/',
      githubRepo: 'https://github.com/simmonsW/work-day-scheduler'
    },
    {
      id: 5,
      projectName: 'Code Quiz',
      projDesc: 'A simple coding quiz to test users on some front-end knowledge',
      deployedProj: 'https://simmonsw.github.io/reimagined-disco/',
      githubRepo: 'https://github.com/simmonsW/reimagined-disco'
    },
    {
      id: 6,
      projectName: 'Password Generator',
      projDesc: 'A simple password generator',
      deployedProj: 'https://simmonsw.github.io/upgraded-fiesta/',
      githubRepo: 'https://github.com/simmonsW/upgraded-fiesta'
    }
  ]);

  const currentProjects = projects.filter((project) => project.name === name);

  return (
    <section id="project-group">
      {currentProjects.map(({
        id,
        projectName,
        projDesc,
        deployedProj,
        githubRepo
      }) => (
        <div key={id} className="project">
          <img
            src={require(`../../assets/project-images/${id}.png`).default}
            alt={projectName}
            className="project-img"
          />

          <div className="project-name">
            <h1 className="project-title">
              {projectName}
            </h1>
          </div>

          <div className="project-desc">
            <p>
              {projDesc}
            </p>
          </div>

          <div className="project-links">
            <div>
              <a href={deployedProj}>
                <GrLaunch />
              </a>
            </div>

            <div>
              <a href={githubRepo}>
                <RiGitRepositoryLine />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
};

export default Project;