import React from 'react';
import { skillsList } from '../../data';
// import Card from 'kromac-ui/dist/Card';

const Skills = () => (
  <section className="content">
    <section className="title">
      <h2>
        <b>Skills</b>
      </h2>
    </section>
    <section className="description skills">
      <section className="skills-list">
        {Object.keys(skillsList).map(k => (
          <section>
            <p>
              <b>{k}</b>
            </p>
            <ul className="ul-techs-list">
              {skillsList[k].map((skill, index) => (
                <li key={index}>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </section>
  </section>
);

export default Skills;
