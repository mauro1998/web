import React from "react";
import foto from '../images/foto.png';
import Heading from "../Heading";
import IconText from "../IconText";
import Skill from "../Skill";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section>
        <img className="photo" src={foto} alt="foto" />
        <Heading>Mauro Aguilar</Heading>
        <IconText icon="email">mauro_aguilar98@hotmail.com</IconText>
        <IconText icon="place">Bello, Antioquia, Colombia</IconText>
      </section>

      <section>
        <Heading>Languages</Heading>
        <IconText icon="check">
          English (Full Professional Proficiency)
        </IconText>
        <IconText icon="check">Spanish (Native)</IconText>
      </section>

      <section>
        <Heading>Technical Skills</Heading>
        <Skill stars={5}>Javascript</Skill>
        <Skill stars={5}>HTML5</Skill>
        <Skill stars={5}>CSS3</Skill>
        <Skill stars={5}>Angular</Skill>
        <Skill stars={5}>Typescript</Skill>
        <Skill stars={5}>Rxjs</Skill>
        <Skill stars={5}>Redux</Skill>
        <Skill stars={4.5}>React.js</Skill>
        <Skill stars={4.5}>SASS</Skill>
        <Skill stars={4}>Node.js</Skill>
        <Skill stars={4}>Jest</Skill>
        <Skill stars={3.5}>Backbone.js</Skill>
        <Skill stars={2.5}>Flutter</Skill>
        <Skill stars={2.5}>Dart</Skill>
      </section>

      <section id="industry-knowledge">
        <Heading>Industry Knowledge</Heading>
        <IconText icon="school">Scrum and Agile Methodologies</IconText>
        <IconText icon="school">Object Oriented Programming</IconText>
        <IconText icon="school">Functional Programming</IconText>
        <IconText icon="school">Frontend Development</IconText>
        <IconText icon="school">Unit Testing</IconText>
        <IconText icon="school">Git Flow</IconText>
        <hr />
        <IconText icon="build">Jira</IconText>
        <IconText icon="build">Azure Devops</IconText>
        <IconText icon="build">Git</IconText>
        <hr />
        <IconText icon="dns">Linux</IconText>
        <IconText icon="dns">Mac OS</IconText>
        <IconText icon="dns">Windows</IconText>
      </section>

      <section>
        <Heading>Soft Skills</Heading>
        <IconText icon="how_to_reg">Analytical</IconText>
        <IconText icon="how_to_reg">Proactive</IconText>
        <IconText icon="how_to_reg">Self-starting</IconText>
        <IconText icon="how_to_reg">Innovative</IconText>
        <IconText icon="how_to_reg">Creative</IconText>
        <IconText icon="how_to_reg">Adaptable</IconText>
        <IconText icon="how_to_reg">Detailed</IconText>
      </section>
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
