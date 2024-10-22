import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../index.css';
import image5 from '../images/test5.jpg';

const Introduction = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h2>About Me</h2>
        <p>
          <Typewriter
            words={[
              'Hello, I am a web developer.',
              'I love building responsive websites.',
              'I am a software designer with a passion for creating elegant and efficient solutions.',
              'I specialize in React and modern web technologies.',
              'As a software developer, service desk analyst,and use case designer I have robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.',
              'I also have the skills and knowledge to troubleshoot and solve software issues on iOS, macOS, android and windows devices',
              'So With That Said, Let\'s create something amazing together!'
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="about-image-container">
        <div className="image-overlay"></div>
        <img 
          src={image5} 
          alt="AboutMe Portrait"
        />
      </div>
    </div>
  );
};
  
  //(
  // <section className="contact-container">
  //   <div className="contact-form-container">
  //     <h2>About Me</h2>
  //     <form className="contact-form">
  //     <p>Hello! I am a software designer with a passion for creating elegant and efficient solutions.</p>
  //     <p>I am a software developer, service desk analyst,and use case designer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment. 
  //       I also have the skills and knowledge to troubleshoot and solve software issues on iOS, macOS, android and windows devices</p>
  //     </form>
  //     </div>
  //     <div className="contact-image-container">
  //     <div className="image-overlay"></div>
  //     <img 
  //       src={image5} alt="Portrait"
  //     />
  //   </div>
  // </section>
//);

export default Introduction;