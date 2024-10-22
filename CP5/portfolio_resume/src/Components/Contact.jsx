import React from 'react';
import { useFormData } from 'herotofu-react';
import '../index.css';
import image4 from '../images/test4.jpg';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-form-container">
    <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input id="firstname" name="firstname" type="text" placeholder=" Enter Your Name" required/>
        
        <label htmlFor="surname">Surname:</label>
        <input id="surname" name="surname" type="text" placeholder=" Enter Your Surname" required/>
        
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="text" placeholder=" Enter Your Email" required/>
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" cols="60" required></textarea>
        
        <button vaule="Submit" type="submit">Send</button>
      </form>
    </div>
    <div className="contact-image-container">
      <div className="image-overlay"></div>
      <img 
        src={image4} alt="Portrait"
      />
    </div>
  </div>
);

export default Contact;