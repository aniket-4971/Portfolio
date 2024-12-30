import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skillsSec">
        <div className="skiilsDescription">
          <h2>Professional Skills</h2>
          <p className="paragraph">
            I have hands-on experience in Full Stack Development, Data
            Structures & Algorithms, and problem-solving. I am continuously
            enhancing my skills through real-world projects and solving coding
            challenges.
          </p>
        </div>
      </div>
      <div className="skills__container bd-grid">
        {/* Skills Text and Data */}
        <div>
          {/* HTML */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">95%</span>
            </div>
          </div>

          {/* CSS */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">90%</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon"></i>
              <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>

          {/* ReactJS */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-react skills__icon"></i>
              <span className="skills__name">ReactJS</span>
            </div>
            <div className="skills__bar skills__react"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>

          {/* Node.js */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-nodejs skills__icon"></i>
              <span className="skills__name">Node.js</span>
            </div>
            <div className="skills__bar skills__node"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>

          {/* MongoDB */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-mongodb skills__icon"></i>
              <span className="skills__name">MongoDB</span>
            </div>
            <div className="skills__bar skills__mongodb"></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>

          {/* ExpressJS */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-server skills__icon"></i>
              <span className="skills__name">ExpressJS</span>
            </div>
            <div className="skills__bar skills__express"></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>

          {/* Data Structures & Algorithms */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-code-alt skills__icon"></i>
              <span className="skills__name">Data Structures & Algorithms</span>
            </div>
            <div className="skills__bar skills__dsa"></div>
            <div>
              <span className="skills__percentage">95%</span>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bx-code-alt skills__icon"></i>
            <span className="skills__name">DevOps</span>
          </div>
          <div className="skills__bar skills__devops"></div>
          <div>
            <span className="skills__percentage">65%</span>
          </div>
        </div>

        {/*C++ */}
        <div className="skills__data">
          <div className="skills__names">
            <i class="bx bxl-c-plus-plus"></i>
            <span className="skills__name">C++</span>
          </div>
          <div className="skills__bar skills__c_plus_plus"></div>
          <div>
            <span className="skills__percentage">90%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
