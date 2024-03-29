import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { NavbarLogo } from '../../assets';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar" id='navbar'>
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <img src={NavbarLogo} />
        </div>
        <div className="app__navbar-links_container">
          <p><a href="#about" className='hover-underline-animation'>About Me</a></p>
          <p><a href="#skills" className='hover-underline-animation'>Skills</a></p>
          <p><a href="#websites" className='hover-underline-animation'>Projects</a></p>
          <p><a href="#experience" className='hover-underline-animation'>Experience</a></p>
          <p><a href="#education" className='hover-underline-animation'>Education</a></p>
        </div>
      </div>
      <div className="app__navbar-sign">
        <p className='hover-underline-animation'>My Resume</p>
        <a href="#contact"><button type="button">Contact Me</button></a>
      </div>
      <div className="app__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="app__navbar-menu_container scale-up-center">
          <div className="app__navbar-menu_container-links">
            <p><a href="#about">About Me</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#websites">Projects</a></p>
            <p><a href="#experience">Experience</a></p>
            <p><a href="#education">Education</a></p>
          </div>
          <div className="app__navbar-menu_container-links-sign">
            <a href="#contact"><button type="button">Contact Me</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;