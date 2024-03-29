import React from 'react';

import './cta.css';

const Cta = () => {
  return (
    <div className='section__padding'>
      <div className='app__cta'>
        <div className='app__cta-content'>
          <p>Don't have the time to read through all of it?</p>
          <h3>Download a shorter version for future reference.</h3>
        </div>
        <div className='app__cta-button'>
        <a href="../../../public/AniketSahran.pdf">
          <button type='button'>Download my Resume</button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Cta;