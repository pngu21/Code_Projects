import React from 'react';
import Navbar from './Componenets/Navbar';
import Header from './Componenets/Header';
import Feature from './Componenets/Feature';
import Offer from './Componenets/Offer';
import About from './Componenets/About';
import Contact from './Componenets/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
