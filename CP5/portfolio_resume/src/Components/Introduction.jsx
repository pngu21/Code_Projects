import React from 'react';
import '../index.css';
import image5 from '../images/test5.jpg';

const Introduction = () => (
  <section className="contact-container">
    <div className="contact-form-container">
      <h2>About Me</h2>
      <form className="contact-form">
      <p>Hello! I am a software designer with a passion for creating elegant and efficient solutions.</p>
      <p>I am a software developer, service desk analyst, and use case designer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment. 
        I also have the skills and knowledge to troubleshoot and solve software issues on iOS, macOS, android and windows devices</p>
      </form>
      </div>
      <div className="contact-image-container">
      <div className="image-overlay"></div>
      <img 
        src={image5} alt="Portrait"
      />
    </div>
  </section>
);

export default Introduction;