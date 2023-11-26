// src/components/Landing.js
import React from 'react';
import './../Landing.css';
import './../Window.css';
import './../Phone.css';
import landing from './../landing.png';
import phone from './../images/phone.png';
import window from './../images/window.png';
import code1 from './../images/first code.png';
import code2 from './../images/second code.png';
import code3 from './../images/third code.png';
import code4 from './../images/fourth code.png';
import code5 from './../images/fifth code.png';
import user from './../images/user.png';
import notification1 from './../images/phone notification 1.png';
import notification2 from './../images/phone notification 2.png';
import notification3 from './../images/phone notification 3.png';


const Landing = () => {
  return (
    <div id="landing" className="fullscreen-section">

        <div className="landing-content">
          <div className='landing-section landing-left-section'>
            <div className='landing-heading'>
              <h1 className='landing-heading'> 
                <span className='landing-heading-we blue-text'>WE</span>
                
                <span className='landing-heading-static'> are here to help </span>
                <span className='landing-heading-you rose-text'>YOU</span>
              </h1>
            </div>
            <div className='landing-text'>
              <p className='landing-text small-heading-font blue-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue vitae augue tincidunt accumsan. </p>  
            </div>
            <div className='landing-button-container'>
              <button className='landing-button hover-color-blue'> Cotact Us</button>
              <button className='landing-button hover-color-blue'> Learn More</button>
            </div>
          </div>
          <div className='landing-section landing-right-section'>
              <div className='landing-right-section-container'>
                <div className='landing-window-div'>
                  <img className='landing-window' src={window} alt='landing'/>
                </div>
                <div className='landing-code-div'>
                  <img className='landing-code-1 landing-code' src={code1} alt='landing' />
                  <img className='landing-code-2 landing-code' src={code2} alt='landing' />
                  <img className='landing-code-3 landing-code' src={code3} alt='landing' />
                  <img className='landing-code-4 landing-code' src={code4} alt='landing' />
                  <img className='landing-code-5 landing-code' src={code5} alt='landing' />
                </div>
                <div className='landing-phone-div'>
                  <img className='landing-phone' src={phone} alt='landing' />
                </div>
                <div className='landing-phone-content-div'>
                  <img className='landing-phone-user' src={user} alt='landing' />
                  <img className='landing-phone-notification1' src={notification1} alt='landing' />
                  <img className='landing-phone-notification2' src={notification2} alt='landing' />
                  <img className='landing-phone-notification3' src={notification3} alt='landing' />
                </div>

              </div>
              

          </div>
        </div>

    </div>
  );
};

export default Landing;