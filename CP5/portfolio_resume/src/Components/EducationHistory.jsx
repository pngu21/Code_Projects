import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 20px;
`;

const EducationHistory = () => (
  <EducationContainer>
    <h2>Education History</h2>
    <ul>
      <li>University A - Degree (2014 - 2018)</li>
      <li>College B - Diploma (2012 - 2014)</li>
    </ul>
  </EducationContainer>
);

export default EducationHistory;