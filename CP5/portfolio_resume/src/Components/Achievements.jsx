import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.section`
  padding: 20px;
`;

const Achievements = () => (
  <AchievementsContainer>
    <h2>Achievements</h2>
    <ul>
      <li>Award X - Description of award</li>
      <li>Award Y - Description of award</li>
    </ul>
  </AchievementsContainer>
);

export default Achievements;