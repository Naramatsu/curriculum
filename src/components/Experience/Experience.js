import React from "react";
import { experiences } from "../../data";

const builder = techs => {
  if (techs.length <= 4) {
    return [{ techsGrouped: techs }];
  }
  return [
    { techsGrouped: techs.slice(0, techs.length / 2) },
    {
      techsGrouped: techs.slice(techs.length / 2, techs.length)
    }
  ];
};

const Experience = () =>
  <section className="content">
    <section className="title">
      <h2>
        <b>Experience</b>
      </h2>
    </section>
    <section className="description services-list">
      {experiences.map((experience, index) =>
        <aside key={index} style={{ width: experience.width }}>
          <section className="service">
            <h5>
              {experience.company}
            </h5>
            <label className="tag">
              {experience.start}
            </label>
            <label> - </label>
            <label className="tag">
              {experience.end}
            </label>
            <p>
              {experience.description}
            </p>
            <br />
            <p>Techs implemented:</p>
            <div style={{ display: "flex" }}>
              {builder(experience.techs).map((techsList, index) =>
                <ul
                  key={index}
                  className="ul-techs-list"
                  style={{ width: experience.ulWidth }}
                >
                  {techsList.techsGrouped.map((tech, index1) =>
                    <li key={index1}>
                      <p>
                        {tech}
                      </p>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </section>
        </aside>
      )}
    </section>
  </section>;

export default Experience;
