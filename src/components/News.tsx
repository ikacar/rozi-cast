// src/components/Socials.js
import React from 'react';
import landing from './../landing.png';

const News = () => {
  return (
    <div id="news" className="fullscreen-section">
      <h1>News Section</h1>
      {/* Dodajte ostatak sadržaja */}
      <img className='landing-image' src={landing} alt='landing' />

    </div>
  );
};

export default News;