// src/components/Services.js
import React from 'react';
import './../Services.css';
import webDevelopment from './../images/web-development.png';
import qa from './../images/qa.png';
import pm from './../images/pm.png';

const Services = () => {
  return (
    <div id="services" className="fullscreen-section">
      <div>
        <span className="section-title small-heading-font rose-text" >_#</span>
        <span className="section-title small-heading-font blue-text">SERVICES</span>
        <span className="section-title small-heading-font rose-text">_//</span>

      </div>
      <div className="services-content">

        <div className="services-arrow blue-text medium-heading-font hover-scale-11 hover-text-color-rose">&lt;#</div>


        <div className="services-container">
          <h1 className="service-container-heading medium-heading-font rose-text">Web App Development</h1>
          <div className="service-card-container">
            <div className="service-card medium-card hover-scale-102 hover-shadow">
              <div className="service-card-image-div" >
                <img className="service-card-image" src={webDevelopment} alt="service" />
              </div>
              <h2 className="service-card-heading small-heading-font blue-text">Web Development</h2>
              <p className="service-card-text small-text-font rose-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quidem. Ipsa accusantium eaque tempore hic odit quas atque quasi pariatur repudiandae, possimus ducimus sapiente quis sequi quae iste vero nobis.</p>
            </div>
            <div className="service-card medium-card hover-scale-102 hover-shadow">
              <div className="service-card-image-div" >
                <img className="service-card-image" src={pm} alt="service" />
              </div>
              <h2 className="service-card-heading small-heading-font blue-text">Project Management</h2>
              <p className="service-card-text small-text-font rose-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quidem. Ipsa accusantium eaque tempore hic odit quas atque quasi pariatur repudiandae, possimus ducimus sapiente quis sequi quae iste vero nobis.</p>
            </div>
            <div className="service-card medium-card hover-scale-102 hover-shadow">
              <div className="service-card-image-div" >
                <img className="service-card-image" src={qa} alt="service" />
              </div>
              <h2 className="service-card-heading small-heading-font blue-text">QA Testing</h2>
              <p className="service-card-text small-text-font rose-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quidem. Ipsa accusantium eaque tempore hic odit quas atque quasi pariatur repudiandae, possimus ducimus sapiente quis sequi quae iste vero nobis.</p>
            </div>
          </div>
          <div className="services-container-dots">
            {/* //napravi tacke koje se menjaju u zavisnosti od broja kartica */}

            <div className="services-dot hover-scale-15 hover-color-blue"/>
            <div className="services-dot hover-scale-15 hover-color-blue"/>
            <div className="services-dot hover-scale-15 hover-color-blue"/>

          </div>
        </div>

        <div className="services-arrow blue-text medium-heading-font hover-scale-11 hover-text-color-rose">#&gt;</div>
      </div>

    </div>
  );
};

export default Services;