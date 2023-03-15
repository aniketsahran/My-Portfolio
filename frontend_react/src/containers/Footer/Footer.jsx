import React from 'react';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';

import { NavbarLogo } from '../../assets';
import './footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-links'>
        <div className='app__footer-links_logo'>
          <img src={NavbarLogo} alt='logo' />
          <p>©2022 Aniket Sahran. All Rights Reserved</p>
        </div>
        <div className='app__footer-links_div'>
          <h4>Go Back</h4>
          <a href='#navbar'><p>Home</p></a>
          <a href='#about'><p>About</p></a>
          <a href='#skills'><p>Skills</p></a>
        </div>
        <div className='app__footer-links_div'>
          <h4>______</h4>
          <a href='#experience'><p>Experience</p></a>
          <a href='#websites'><p>Projects</p></a>
          <a href='#education'><p>Education</p></a>
        </div>
        <div className='app__footer-links_div'>
          <h4>Get in Touch</h4>
          <a href='mailto:aniketsahran3@gmail.com'><p>aniketsahran3@gmail.com</p></a>
          <p>
            <a className='app__footer-links_div_socialIcon' href='https://www.instagram.com/aniketsahran/' target='_blank'><BsInstagram size={24} /></a>
            <a className='app__footer-links_div_socialIcon' href='https://www.facebook.com/aniket.sahran.7' target='_blank'><BsFacebook size={24} /></a>
            <a className='app__footer-links_div_socialIcon' href='https://www.linkedin.com/in/aniket-sahran-453586201/' target='_blank'><BsLinkedin size={24} /></a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;