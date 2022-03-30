import React from "react";
import { about } from "../../data";

const builder = () => {
  const items = [];
  Object.keys(about).forEach(item => {
    if (item === "Phone") {
      about[item].forEach((element, index) => {
        items.push({
          tag: `${item}${index + 1}`,
          value: element
        });
      });
    } else {
      items.push({
        tag: item,
        value: about[item]
      });
    }
  });
  return items.filter(temp => temp.tag !== "description");
};

const AboutMe = () =>
  <section className="content">
    <section className="title">
      <h2>
        <b>About</b> Me
      </h2>
    </section>
    <section className="description">
      <aside>
        <h5>As proffesional</h5>
        <p>
          {about.description}
        </p>
      </aside>
      <aside>
        {builder().map((info, index) =>
          <section key={index} className="personal-info">
            <label className="tag">
              {info.tag}:
            </label>
            <p>
              {info.value}
            </p>
          </section>
        )}
      </aside>
    </section>
  </section>;

export default AboutMe;
