import React, { useState } from 'react';
import Chatbot from './Chatbot'
import photo from '../assests/photo2.jpeg'

const Home = () => {
 // const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <section className="home bd-grid" id="home">
      <div className="about__container bd-grid">
        <div className="about__img2">
          <img src={photo} alt="Error" />
        </div>
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Aniket</span>
            <br /> Software Developer
          </h1>
          <a href="#contact" className="button">
            Contact
          </a>
        </div>
      </div>
      {/* <div className="chatbot-toggle" onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
        {isChatbotOpen ? "Close Chat" : "Chat with Me"}
      </div> */}
      {<Chatbot />}
    </section>
  );
};

export default Home;
