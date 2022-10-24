import React from 'react';
import EducationTile from '../EducationTile/EducationTile';
import Heading from '../Heading';
import brainshark from '../images/brainshark.jpg';
import emsl from '../images/emsl.jpg';
import generic from '../images/generic.png';
import placester from '../images/placester.jpg';
import potent from '../images/potent.jpg';
import sena from '../images/sena.png';
import victory from '../images/victory.jpg';
import yuxi from '../images/yuxi.jpg';
import gorilla from '../images/gorilla.jpeg';
import WorkExpTile from '../WorkExpTile';
import './Content.css';

const Content = () => {
  const years = new Date().getFullYear() - 2016;

  return (
    <main className="content">
      <section>
        <Heading>Professional Profile</Heading>
        <p>
          Passionate front-end developer with {years}+ years of experience
          building web applications in fast-paced, collaborative environments.
          Specialist in client side solutions and problem solving with a wide
          and comprehensive knowledge of web development tools, agile
          methodologies and Javascript programming language.
        </p>
      </section>

      <section>
        <Heading>Work Experience</Heading>

        <WorkExpTile
          src={gorilla}
          title="Frontend Developer"
          company="Gorilla Logic"
          type="Full-time"
          from={new Date(2021, 8)}>
          As Frontend Developer Consultant for Gorilla Logic I’ve had the
          opportunity to work in a fast paced environment full of challenges and
          very professional people in different areas. My main duties are varied
          and include creating, supporting and maintaining large front-end
          codebases for different clients of the company using my technical
          skills and knowledge on frontend frameworks and libraries, client side
          state management and web application development in general.
        </WorkExpTile>

        <WorkExpTile
          src={yuxi}
          title="Frontend Developer"
          company="Yuxi Global"
          type="Full-time"
          from={new Date(2018, 8)}
          to={new Date(2021, 7)}>
          Yuxi Global has been a journey full of challenges and learning
          experiences that have enriched my professional development and
          personal growth. Here is where I've mastered most of my technical and
          soft skills, working with different kinds of customers, projects and
          web development tools.
        </WorkExpTile>

        <WorkExpTile
          src={emsl}
          title="Frontend Developer"
          company="EMSL Analytical, Inc."
          type="Full-time"
          from={new Date(2021, 1)}
          to={new Date(2021, 7)}>
          EMSL is where I started my journey with React.js, writing unit tests
          with Jest, implementing different front-end patterns like MVC and
          MVVM, creating and maintaining internal applications for the personnel
          of the company.
        </WorkExpTile>

        <WorkExpTile
          src={potent}
          title="Frontend Developer"
          company="Potent Studios"
          type="Full-time"
          from={new Date(2020, 6)}
          to={new Date(2021, 1)}>
          Potent Studios was a short journey but a very enriching experience
          where I was part of a team that created a web/mobile application from
          scratch to offer payroll, accounting and time tracking services to
          indie projects, low budget producers and other companies in the film
          and television industry.
        </WorkExpTile>

        <WorkExpTile
          src={brainshark}
          title="Frontend Developer"
          company="Brainshark"
          type="Full-time"
          from={new Date(2019, 10)}
          to={new Date(2020, 6)}>
          Brainshark is a US based company in the e-learning sector. Here is
          where I mastered my skills on Angular and some other front-end
          technologies by maintaining large existing codebases for the main
          product of the company. I was able to develop high debugging skills to
          find and solve bugs quickly during this period of time, write E2E,
          integration and unit tests using tools like Jest, Jasmine, Protractor
          and Karma.
        </WorkExpTile>

        <WorkExpTile
          id="placester"
          src={placester}
          title="Frontend Developer"
          company="Placester, Inc."
          type="Full-time"
          from={new Date(2018, 8)}
          to={new Date(2019, 9)}>
          Placester, Inc. is a US based company in the Real Estate industry.
          Here is where I started my journey with front-end frameworks, creating
          and maintaining Angular and Backbone.js based applications, learning
          about front-end architectures and client side design patterns,
          implementing strategies for maintaining application state using Redux
          pattern, Rxjs and tons of other kind of web tools, delivering
          experiences in a fast-paced, collaborative and agile environment full
          of professional and highly skilled people.
        </WorkExpTile>

        <WorkExpTile
          src={victory}
          title="Fullstack Developer"
          company="Victory Productions"
          type="Full-time"
          from={new Date(2017, 10)}
          to={new Date(2018, 9)}>
          Another company in the e-learning industry. A challenging experience I
          faced here was one of the projects where the goal was to convert 500+
          flash games to HTML5 based (compatible) games using libraries like
          Phaser and Three.js. This is where I started to develop a passion for
          the Javascript programming language. I was really amazed by how you
          can build full learning experiences with the power of WebGL and some
          other tools used in combination.
        </WorkExpTile>

        <WorkExpTile
          src={generic}
          title="Fullstack Developer"
          company="Linden Colombia"
          type="Full-time"
          from={new Date(2016, 5)}
          to={new Date(2017, 10)}>
          My very first professional working experience. This company was
          dedicated to build web e-learning experiences for US customers. My
          duties were varied and ranged from writing a lot of client side and
          server side Javascript code to creating rest APIs and maintaining
          relational databases.
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
          location="Medellín, Antioquia, Colombia">
          Here is where I had the opportunity to dig more into the software
          development ecosystem. This is where I explored the different flavors
          of software development, working on challenging projects, learning
          languages like PHP, Java, C# and Javascript, modeling databases with
          MySQL, SQL Server and MongoDB, attending to software security
          conferences and even participating in programming competitions around
          the country.
        </EducationTile>

        <EducationTile
          src={sena}
          title="Associate Degree in Software Development"
          institute="National Learning Service (SENA)"
          field="Software Engineering"
          from="2013"
          to="2015"
          time="2 yrs"
          location="Medellín, Antioquia, Colombia">
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
