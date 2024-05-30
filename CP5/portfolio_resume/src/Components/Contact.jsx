import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact</h2>
    <p>Email: designer@example.com</p>
    <p>Phone: 123-456-7890</p>
  </ContactContainer>
);

export default Contact;