import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// const ProjectsContainer = styled.section`
//   padding: 20px;
// `;

const Projects = () => (
  <section className="projects-container">
    <h2>Projects</h2>

  <div className="cards-container">
    <div className="card">
      <Link to="/pro1">
        <div className="card-content">
          <h3>Project 1</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/pro2">
        <div className="card-content">
          <h3>Project 2</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/pro3">
        <div className="card-content">
          <h3>Project 3</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/pro4">
        <div className="card-content">
          <h3>Project 4</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/pro5">
        <div className="card-content">
          <h3>Project 5</h3>
        </div>
      </Link>
    </div>
    <div className="card">
      <Link to="/pro6">
        <div className="card-content">
          <h3>Project 6</h3>
        </div>
      </Link>
    </div>
  </div>

  </section>
);

export default Projects;