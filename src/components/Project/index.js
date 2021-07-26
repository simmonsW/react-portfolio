import React, { useState } from 'react';
import { GrLaunch } from 'react-icons/gr';
import { RiGitRepositoryLine, RiYoutubeLine } from 'react-icons/ri';

const Project = ({ name }) => {
  const [projects] = useState([
    {
      id: 1,
      projectName: 'ChelcieFans',
      projDesc: "A place for Chelcie's fans to discuss all things Chelcie",
      deployedProj: 'https://secret-hollows-41476.herokuapp.com/',
      githubRepo: 'https://github.com/simmonsW/chelcie-fans',
      imageName: 'chelcie-fans',
      demoVid: false
    },
    {
      id: 2,
      projectName: 'Pawpals',
      projDesc: "A social platform to find furry friends for your pets!",
      deployedProj: 'https://noemiegrau.github.io/pawpals/',
      githubRepo: 'https://github.com/Noemiegrau/pawpals',
      imageName: 'pawpals',
      demoVid: false
    },
    {
      id: 3,
      projectName: 'Rate My Ride',
      projDesc: "A social platform for users to show off their car and check out other user's cars",
      deployedProj: 'https://rate-my-ride.herokuapp.com/',
      githubRepo: 'https://github.com/albertjly/rate-my-ride',
      imageName: 'rate-my-ride',
      demoVid: false
    },
    {
      id: 4,
      projectName: 'Employee Tracker',
      projDesc: 'A CMS, or content management system, for tracking employees, departments, roles, etc.',
      deployedProj: 'https://www.youtube.com/watch?v=jodcGBJgRyQ',
      githubRepo: 'https://github.com/simmonsW/employee-tracker',
      imageName: 'employee-tracker',
      demoVid: true
    },
    {
      id: 5,
      projectName: 'Weather Dashboard',
      projDesc: 'A weather app where users can search for weather based on a city, and searched cities are saved to search again.',
      deployedProj: 'https://simmonsw.github.io/weather-dashboard/',
      githubRepo: 'https://github.com/simmonsW/weather-dashboard',
      imageName: 'weather-dashboard',
      demoVid: false
    },
    {
      id: 6,
      projectName: 'Work Day Scheduler',
      projDesc: 'A schedule app for users to plan their work day',
      deployedProj: 'https://simmonsw.github.io/work-day-scheduler/',
      githubRepo: 'https://github.com/simmonsW/work-day-scheduler',
      imageName: 'work-day-scheduler',
      demoVid: false
    },
    // {
    //   id: 7,
    //   projectName: 'Code Quiz',
    //   projDesc: 'A simple coding quiz to test users on some front-end knowledge',
    //   deployedProj: 'https://simmonsw.github.io/reimagined-disco/',
    //   githubRepo: 'https://github.com/simmonsW/reimagined-disco',
    //   imageName: 'code-quiz',
    //   demoVid: false
    // },
    // {
    //   id: 7,
    //   projectName: 'Password Generator',
    //   projDesc: 'A simple password generator',
    //   deployedProj: 'https://simmonsw.github.io/upgraded-fiesta/',
    //   githubRepo: 'https://github.com/simmonsW/upgraded-fiesta',
    //   imageName: 'password-generator',
    //   demoVid: false
    // }
  ]);

  const currentProjects = projects.filter((project) => project.name === name);

  return (
    <section id="project-group">
      {currentProjects.map(({
        id,
        projectName,
        projDesc,
        deployedProj,
        githubRepo,
        imageName,
        demoVid
      }) => (
        <div key={id} className="project">
          <img
            src={require(`../../assets/project-images/${imageName}.png`).default}
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
              <a
                target="_blank"
                rel="noopener noreferrer" 
                href={deployedProj}
              >
                {demoVid === false && (
                  <GrLaunch />
                )}
                {demoVid === true && (
                  <RiYoutubeLine className="youtube-link"/>
                )}
              </a>
            </div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"  
                href={githubRepo}
              >
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