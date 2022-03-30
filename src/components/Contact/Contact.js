import React from "react";
import { contact } from "../../data";

const Contact = () =>
  <section className="contact">
    <div className="card">
      <img src={contact.img} alt={contact.alt} />
      <h3>
        {contact.name}
      </h3>
      <h5>
        {contact.path}
      </h5>
      <section className="media">
        <h6>Contact me</h6>
        <section>
          <ul>
            {contact.media.map((social, index) =>
              <li key={index}>
                <a href={social.link} rel="noreferrer" target="_blank">
                  <img src={social.img} alt={social.alt} style={{padding: social.padding}} />
                </a>
              </li>
            )}
          </ul>
        </section>
      </section>
    </div>
  </section>;

export default Contact;
