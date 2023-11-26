// src/App.js
import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import News from './components/News';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/source-code-pro" rel="stylesheet"/>

      <NavBar />
      <Landing />
      <Services />
      <AboutUs />
      <Team />
      <Contact />
      <News />
    </div>
  );
}

export default App;