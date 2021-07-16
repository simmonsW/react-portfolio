import React from 'react';

function About() {
  return(
    <section className="about-me">
      <h1 id="about">
        About Me
      </h1>

      <div className="about-content">
        <img 
          src={require("../../assets/about-me/Its-a-me.jpg").default} 
          alt="Wyatt Simmons"
        />
        <p className="about-description">
          Welcome! My name is Wyatt Simmons and thanks for checking out my website! I
          am a soon to be graduate from the UCLA coding Bootcamp. I enjoy working with 
          backend tools, as well as JavaScript. I enjoy working through problems to 
          find solutions. Check out the Portfolio tab to see some of my latest work.
        </p>
      </div>
    </section>
  )
};

export default About;