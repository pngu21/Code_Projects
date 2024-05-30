import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import WorkHistory from './Components/WorkHistory';
import Projects from './Components/Projects';
import EducationHistory from './Components/EducationHistory';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Introduction />
        <WorkHistory />
        <Projects />
        <EducationHistory />
        <Achievements />
        <Contact />
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default App;