// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo hover-scale-102" onClick={() => scrollToSection('landing')}>
                <span className="blue-text">#_</span>
                <span className="rose-text">rozi</span>
                <span className="blue-text">_cast</span>
            </div>
            <div className="nav-links blue-text ">
                <button onClick={() => scrollToSection('services')}># SERVICES</button>
                <button onClick={() => scrollToSection('aboutus')}># ABOUT US</button>
                <button onClick={() => scrollToSection('team')}># TEAM</button>
                <button onClick={() => scrollToSection('contact')}># CONTACT</button>
                <button onClick={() => scrollToSection('news')}># NEWS</button>
            </div>
        </nav>
    );
};

export default NavBar;