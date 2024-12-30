import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_o7ikkij', // Replace with your Service ID
        'template_c4ba2s9', // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'aGtRU933qph9ocnsP' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent!');
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="home__social">
          <a
            href="https://www.linkedin.com/in/aniket-kumar-99b591234/"
            className="home__social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:aniketk.ug21.cs@nitp.ac.in"
            className="home__social-icon"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://github.com/aniket-4971"
            className="home__social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      <div className="contact__container bd-grid">
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="contact__input"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="contact__input"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="0"
            rows="10"
            className="contact__input contact_input_message"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact__button button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
