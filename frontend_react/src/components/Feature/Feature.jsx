import React from 'react';

import './feature.css';

const Feature = ({ title, text, marks }) => {
  return (
    <div className='app__features-container__feature'>
      <div className='app__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='app__features-container__feature-text'>
        <p>{text}</p>
        <br />
        {marks && <p>{marks}</p>}
      </div>
    </div>
  )
}

export default Feature;