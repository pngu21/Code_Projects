import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 20px;
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>Projects</h2>
    <ul>
      <li>Project X - Description of project X</li>
      <li>Project Y - Description of project Y</li>
    </ul>
  </ProjectsContainer>
);

export default Projects;