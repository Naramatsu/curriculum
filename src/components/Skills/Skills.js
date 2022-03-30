import React from "react";
import { skills } from "../../data";
import Card from "kromac-ui/dist/Card";

const Skills = () =>
  <section className="content">
    <section className="title">
      <h2>
        <b>Skills</b>
      </h2>
    </section>
    <section className="description">
      <section className="skills-list">
        {skills.map((skill, index) =>
          <Card
            key={index}
            cardType="percentage"
            title={skill.name}
            progressColor="#ff3387"
            progress={skill.percentage}
          />
        )}
      </section>
    </section>
  </section>;

export default Skills;
