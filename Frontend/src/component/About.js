import React from "react";
import photo from "../assests/photo2.jpeg";
import resumePDF from "../assests/Aniket_Kumar_2106084.pdf"
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={photo} alt="Error" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am Aniket</h2>
          <p className="about__text">
            I'm a passionate web developer with experience in Full Stack
            Development, Data Structures & Algorithms, and Machine Learning. I
            love solving problems and creating innovative solutions that add
            value to the tech community.
          </p>
          {/* <a href={resumePDF} className="downloadBtn"  download="Aniket_Kumar_Resume.pdf">
          <button className="button">Download My Resume</button>
        </a> */}
        <a href= {resumePDF} className="button downloadBtn" download= "Aniket_Kumar_Resume.pdf">
        Download My Resume
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
