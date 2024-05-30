import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const Introduction = () => (
  <IntroContainer>
    <h2>About Me</h2>
    <p>Hello! I am a software designer with a passion for creating elegant and efficient solutions...</p>
  </IntroContainer>
);

export default Introduction;