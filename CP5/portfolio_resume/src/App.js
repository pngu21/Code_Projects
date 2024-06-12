import React, { useState } from 'react';
import './index.css';
// import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import WorkHistory from './Components/WorkHistory';
import Projects from './Components/Projects';
import EducationHistory from './Components/EducationHistory';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;
// const Content = styled.div`
//   flex: 1;
// `;
// function App() {
//   return (
//     <MainContainer>
//       <Header />
//       <Content>
//         <Introduction />
//         <WorkHistory />
//         <Projects />
//         <EducationHistory />
//         <Achievements />
//         <Contact />
//       </Content>
//       <Footer />
//     </MainContainer>
//   );
// }
const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Introduction':
        return <Introduction />;
      case 'WorkHistory':
        return <WorkHistory />;
      case 'Projects':
        return <Projects />;
      case 'EducationHistory':
        return <EducationHistory />;
      case 'Achievements':
        return <Achievements />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="cards-container">
        {selectedComponent === null ? (
          <>
            <div className="card" onClick={() => setSelectedComponent('Introduction')}>
              <h3>About Me</h3>
            </div>
            <div className="card" onClick={() => setSelectedComponent('WorkHistory')}>
              <h3>Work History</h3>
            </div>
            <div className="card" onClick={() => setSelectedComponent('Projects')}>
              <h3>Projects</h3>
            </div>
            <div className="card" onClick={() => setSelectedComponent('EducationHistory')}>
              <h3>Education History</h3>
            </div>
            <div className="card" onClick={() => setSelectedComponent('Achievements')}>
              <h3>Achievements</h3>
            </div>
            <div className="card" onClick={() => setSelectedComponent('Contact')}>
              <h3>Contact</h3>
            </div>
          </>
        ) : (
          <div className="card-full">{renderComponent()}</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;