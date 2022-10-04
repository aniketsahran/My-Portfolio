import React from 'react';

import { Feature } from '../../components';
import './education.css';

const Education = () => {
  return (
    <div className='app__education section__margin' id='education'>
      <div className='app__education-heading'>
        <h1 className='gradient__text'>My Alma Maters.</h1>
      </div>
      <div className='app__education-container'>
        <Feature
          title='BE Computer Science & Business Systems'
          text='Thapar Institute of Engineering and Technology' 
          marks='CGPA: 9.50'
        />
        <Feature 
          title='Senior Secondary Education (XII)'
          text='Salwan Public School, Gurugram'
          marks='95.6 %'
        />
        <Feature 
          title='Secondary Education (X)'
          text='Salwan Public School, Gurugram'
          marks='96.2 %'
        />
      </div>
    </div>
  )
}

export default Education;