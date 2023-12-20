import React from 'react';


import me from "../../assets/img/me.webp";
import resume from "../../assets/files/CV_EN.pdf";

const About = ({pageContent}) => {
    return (
        <div className="about-container">
        <div className="about-content">
          <div className="left">
            <div className="me">
              <img alt="me" src={me} />
            </div>
            <div className="contact-section">
              {Object.entries(pageContent.contact).map(
                ([key, value], index) => {
                  return (
                    <div className="inline" key={index}>
                      <img
                        src={value.icon}
                        alt={value.icon}
                        className="contact-icon"
                      ></img>
                      <a href={value.url} className="contact-text">
                        {value.text}
                      </a>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="right">
            <p className="about-title">{pageContent.title}</p>
            <p className="about-text">{pageContent.text[0]}</p>
            <p className="about-text">{pageContent.text[1]}</p>
            <div className="resume">
              <a href={resume}>Download my resume</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
