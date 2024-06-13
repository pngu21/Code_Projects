import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ConditionalNavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education-history" element={<EducationHistory />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="cards-container">
    <div className="card">
      <Link to="/introduction">
        <div className="card-content">
          <h3>About Me</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/work-history">
        <div className="card-content">
          <h3>Work History</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/projects">
        <div className="card-content">
          <h3>Projects</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/education-history">
        <div className="card-content">
          <h3>Education History</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/achievements">
        <div className="card-content">
          <h3>Achievements</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/contact">
        <div className="card-content">
          <h3>Contact</h3>
        </div>
      </Link>
    </div>
  </div>
);

const ConditionalNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return location.pathname !== '/' ? (
    <nav className="nav-bar">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/introduction" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        <Link to="/work-history" onClick={() => setIsMenuOpen(false)}>Work History</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/education-history" onClick={() => setIsMenuOpen(false)}>Education History</Link>
        <Link to="/achievements" onClick={() => setIsMenuOpen(false)}>Achievements</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  ) : null;
};

export default App;

// const App = () => {
//   const [selectedComponent, setSelectedComponent] = useState(null);

//   const renderComponent = () => {
//     switch (selectedComponent) {
//       case 'Introduction':
//         return <Introduction />;
//       case 'WorkHistory':
//         return <WorkHistory />;
//       case 'Projects':
//         return <Projects />;
//       case 'EducationHistory':
//         return <EducationHistory />;
//       case 'Achievements':
//         return <Achievements />;
//         case 'Contact':
//           return <Contact />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <nav className="nav-bar">
//           <Link to="/">Home</Link>
//           <Link to='Introduction'>About Me</Link>
//           <Link to='WorkHistory'>Work History</Link>
//           <Link to='Projects'>Projects</Link>
//           <Link to='EducationHistory'>Education History</Link>
//           <Link to='Achievements'>Achievements</Link>
//           <Link to='Contact'>Contact</Link>
//         </nav>
//         <div className="cards-container">
//         <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/introduction" element={<Introduction />} />
//             <Route path="/work-history" element={<WorkHistory />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/education-history" element={<EducationHistory />} />
//             <Route path="/achievements" element={<Achievements />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>

//           {selectedComponent === null ? (
//             <>
//               <div className="card" onClick={() => setSelectedComponent('Introduction')}>
//                 <h3>About Me</h3>
//               </div>
//               <div className="card" onClick={() => setSelectedComponent('WorkHistory')}>
//                 <h3>Work History</h3>
//               </div>
//               <div className="card" onClick={() => setSelectedComponent('Projects')}>
//                 <h3>Projects</h3>
//               </div>
//               <div className="card" onClick={() => setSelectedComponent('EducationHistory')}>
//                 <h3>Education History</h3>
//               </div>
//               <div className="card" onClick={() => setSelectedComponent('Achievements')}>
//                 <h3>Achievements</h3>
//               </div>
//               <div className="card" onClick={() => setSelectedComponent('Contact')}>
//                 <h3>Contact</h3>
//               </div>
//             </>
//           ) : (
//             <div className="card-full">{renderComponent()}</div>
//           )}
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// };