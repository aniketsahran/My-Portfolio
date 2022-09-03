import React from 'react';

import { MyPic } from '../../assets';
import './header.css';

const Header = () => {
  return (
    <div className='app__header section__padding' id='home'>
      <div className='app__header-content'>
        <h1 className='gradient__text'>
          Hello!  I'm  Aniket  Sahran.
        </h1>
        <p>
          I'm currently pursuing my Bachelors in Engineering of Computer Science and Business Systems at Thapar Institute of Engineering and Technology, Patiala.
        </p>
        <p>
          Scroll down to know more about me.
        </p>
      </div>
      <div className='app__header-image'>
        <img src={MyPic} alt='My Picture' />
      </div>
    </div>
  )
}

export default Header;