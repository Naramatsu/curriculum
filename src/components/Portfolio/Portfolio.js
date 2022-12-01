import React from 'react';
import { projects } from '../../data';

const Portfolio = () => (
  <section className="content">
    <section className="title">
      <h2>
        <b>Personal</b> Portfolio
      </h2>
    </section>
    <section className="description">
      <section className="skills-list">
        {projects.map((project, index) => (
          <section key={index} className="portfolio">
            <a href={project.link} rel="noreferrer" target="_blank">
              <img src={project.img} alt={project.name} />
            </a>
            <p>{project.name}</p>
          </section>
        ))}
      </section>
    </section>
  </section>
);

export default Portfolio;
