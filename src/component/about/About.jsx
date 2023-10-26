import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <h6>Btech MNIT</h6>
              <h6>2025</h6>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Problems</h5>
              <h6>500+ solved</h6>
              <h6> across many</h6>
              <h6> plateforms</h6>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <h6>5+ projects </h6>
              <h6>completed</h6>
            </article>
          </div>
          <p>
            I am a Third year student at MNIT Jaipur pursuing my btech in
            Electronics and Communications Engineering. A programmer with good
            problem solving skills and a good hold on data structures and
            algorithms in c and JAVA. A Frontend Developer equipped with Skills
            in ReactJs and a lot of interest in Software-development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
