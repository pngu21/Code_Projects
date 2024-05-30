import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.section`
  padding: 20px;
`;

const WorkHistory = () => (
  <WorkContainer>
    <h2>Work History</h2>
    <ul>
      <li>Company A - Software Designer (2020 - Present)</li>
      <li>Company B - Frontend Developer (2018 - 2020)</li>
    </ul>
  </WorkContainer>
);

export default WorkHistory;