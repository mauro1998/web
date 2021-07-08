import React from "react";
import EducationTile from "../EducationTile/EducationTile";
import Heading from "../Heading";
import brainshark from "../images/brainshark.jpg";
import emsl from "../images/emsl.jpg";
import generic from "../images/generic.png";
import placester from "../images/placester.jpg";
import potent from "../images/potent.jpg";
import sena from "../images/sena.png";
import victory from "../images/victory.jpg";
import yuxi from "../images/yuxi.jpg";
import WorkExpTile from "../WorkExpTile";
import "./Content.css";

const Content = () => {
  return (
    <main className="content">
      <section>
        <Heading>Professional Profile</Heading>
        <p>
          Passionate, highly skilled and creative software developer with 5+
          years of experience building different types of websites and
          applications in fast-paced, collaborative environments. Expert in
          client side solutions and problem solving with a wide and
          comprehensive knowledge of web development tools, agile methodologies
          and programming languages.
        </p>
      </section>

      <section>
        <Heading>Work Experience</Heading>

        <WorkExpTile
          src={yuxi}
          title="Frontend Developer"
          company="Yuxi Global"
          type="Full-time"
          from="Sep 2018"
          to="Present"
          time="2 yrs 11 mos"
        >
          Yuxi Global has been a journey full of challenges and learning
          experiences that have enriched my professional development and
          personal growth. Here is where I've mastered most of my technical and
          soft skills, working with different kind of customers, projects and
          teammates.
        </WorkExpTile>

        <WorkExpTile
          src={emsl}
          title="Frontend Developer"
          company="EMSL Analytical, Inc."
          type="Full-time"
          from="Feb 2021"
          to="Present"
          time="6 mos"
        >
          EMSL is where I started my journey with React JS, writing unit tests
          with Jest, implementing different front-end patterns, creating and
          maintaining internal applications for the personnel of the company.
        </WorkExpTile>

        <WorkExpTile
          src={potent}
          title="Frontend Developer"
          company="Potent Studios"
          type="Full-time"
          from="Jul 2020"
          to="Feb 2021"
          time="8 mos"
        >
          Potent Studios was one of Yuxi's customers where we created a web and
          mobile application from scratch to offer payroll, accounting and time
          tracking services to indie projects, low budget producers and other
          companies in the film and television industry.
        </WorkExpTile>

        <WorkExpTile
          src={brainshark}
          title="Frontend Developer"
          company="Brainshark"
          type="Full-time"
          from="Nov 2019"
          to="Jul 2020"
          time="9 mos"
        >
          Brainshark is a US based company dedicated to the e-learning sector.
          Brainshark was a great experience where I mastered my skills on
          Angular (2+) and some other front-end technologies due to the
          challenge of maintaining a large existing codebase for the main
          application of the company. Here I developed high debugging skills to
          find and solve bugs quickly and also wrote lots of E2E, integration
          and unit tests using tools like Jest, Jasmine, Protractor and Karma.
        </WorkExpTile>

        <WorkExpTile
          src={placester}
          title="Frontend Developer"
          company="Placester, Inc."
          type="Full-time"
          from="Sep 2018"
          to="Oct 2019"
          time="1 yr 2 mos"
          id="placester"
        >
          Placester, Inc. is a US based company dedicated to the real estate
          industry. Here is where I really started my journey with front-end
          frameworks, creating and maintaining Angular (2+) and Backbone JS
          based applications, learning about front-end architectures and
          patterns using Redux, Rxjs and tons of other kind of tools, delivering
          experiences in a fast-paced, collaborative and agile environment full
          of professional and highly skilled people.
        </WorkExpTile>

        <WorkExpTile
          src={victory}
          title="Fullstack Developer"
          company="Victory Productions"
          type="Full-time"
          from="Nov 2017"
          to="Sep 2018"
          time="11 mos"
        >
          Victory Productions is a US based company dedicated to the e-learning
          sector. I was mainly working as a front-end developer. One of the most
          challenging and fun experiences I've had the opportunity to work in
          was one of Victory's project where we had to convert 500+ flash games
          to HTML5 based (compatible) games. I think this is where I really
          started to develop a passion for the Javascript programming language.
          I was really amazed by how you can build full learning experiences
          with the power of WebGL and some other tools used in combination.
        </WorkExpTile>

        <WorkExpTile
          src={generic}
          title="Fullstack Developer"
          company="Linden Colombia"
          type="Full-time"
          from="Jun 2016"
          to="Nov 2017"
          time="1 yr 6 mos"
        >
          My very first professional working experience. Certainly a challenging
          experience. Linden Colombia was a company dedicated to build web
          e-learning experiences for US customers. My duties were varied and
          ranged from writing a lot of client and server side javascript code to
          creating rest APIs and maintaining SQL based databases.
        </WorkExpTile>
      </section>

      <section>
        <Heading>Education</Heading>

        <EducationTile
          src={sena}
          title="Bachelor of Technology in Analysis and Development of Information Systems"
          institute="National Learning Service (SENA)"
          field="Software Engineering"
          from="2015"
          to="2017"
          time="2 yrs"
          location="Medellín, Antioquia, Colombia"
        >
          The journey continued and I decided to dig more into the software
          development ecosystem. During this period of time I had the
          opportunity to explore the different flavors of software development,
          working on challenging projects, learning languages like PHP, Java, C#
          and Javascript, modeling databases with MySQL, SQL Server and MongoDB,
          attending to software security conferences and even participating in
          programming competitions around Colombia.
        </EducationTile>

        <EducationTile
          src={sena}
          title="Associate Degree in Software Development"
          institute="National Learning Service (SENA)"
          field="Software Engineering"
          from="2013"
          to="2015"
          time="2 yrs"
          location="Medellín, Antioquia, Colombia"
        >
          This is where my software development journey started. During this
          period of time I discovered the power of programming languages and
          developed a foundation of basic software development techniques,
          programming logic and technical skills.
        </EducationTile>
      </section>
    </main>
  );
};

Content.propTypes = {};

export default Content;
