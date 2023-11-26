// src/components/Team.js
import React from 'react';
import './../Team.css';
import ilija from './../ilija.png';
import matrix from './../matrix.jpg';

const Team = () => {
  return (
    <div id="team" className="fullscreen-section">
      <div className="team-container">
      <div>
        <span className="section-title small-heading-font rose-text" >*!\</span>
        <span className="section-title small-heading-font blue-text">Our Team</span>
        <span className="section-title small-heading-font rose-text">*_</span>

      </div>
      <div className="team-content">

        <div className="team-row">
        </div>
        <div className="team-row">
          <div className="team-card small-card">
            <div className="team-card-container">
              <img src={ilija} alt="" className="team-card-image" />
              <div className='team-card-text'>
                <h2 className='blue-text'>Ilija Mikic</h2>
                <p className='rose-text'>Petrijevac</p>
              </div>
            </div>
          </div>
          <div className="team-card small-card">
            <div className="team-card-container">
              <img src={ilija} alt="" className="team-card-image" />
              <div className='team-card-text'>
                <h2 className='blue-text'>Ilija Mikic</h2>
                <p className='rose-text'>Petrijevac</p>
              </div>
            </div>
          </div>
          <div className="team-card small-card">
            <div className="team-card-container">
              <img src={ilija} alt="" className="team-card-image" />
              <div className='team-card-text'>
                <h2 className='blue-text'>Ilija Mikic</h2>
                <p className='rose-text'>Petrijevac</p>
              </div>
            </div>
          </div>
          <div className="team-card small-card">
            <div className="team-card-container">
              <img src={ilija} alt="" className="team-card-image" />
              <div className='team-card-text'>
                <h2 className='blue-text'>Ilija Mikic</h2>
                <p className='rose-text'>Petrijevac</p>
              </div>
            </div>
          </div>
          <div className="team-card small-card">
            <div className="team-card-container">
              <img src={ilija} alt="" className="team-card-image" />
              <div className='team-card-text'>
                <h2 className='blue-text'>Ilija Mikic</h2>
                <p className='rose-text'>Petrijevac</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-row">
          <div className="team-card small-card card-shadow-rose"/>
          <div className="team-card small-card card-shadow-rose"/>
          <div className="team-card small-card card-shadow-rose"/>
          <div className="team-card small-card card-shadow-rose"/>
          <div className="team-card small-card "/>

        </div>
    
      </div>
    </div>
  </div>
  );
};

export default Team;