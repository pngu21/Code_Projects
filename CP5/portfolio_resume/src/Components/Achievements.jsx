import React from 'react';
import '../index.css';
// import styled from 'styled-components';

// const AchievementsContainer = styled.section`
//   padding: 20px;
// `;

const Achievements = () => (
  <section className="achievements-container">
    <h2>Achievements</h2>
    <ul>
      <li>ITIL Foundation Certificate in IT Service Management</li>
      <li>Jamf Certified Associate - Jamf Pro</li>
      <li>Business Analyst Certification</li>
      <li>Apple Certified Support Professional Certification</li>
    </ul>
  </section>
);

export default Achievements;