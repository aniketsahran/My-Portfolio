import React from 'react';

import './about.css';

const About = () => {
  return (
    <div className='app__about section__padding' id='about'>
      <div className='app__about-heading'>
        <h1 className='gradient__text'>
          A little more about me.
        </h1>
      </div>
      <div className='app__about-container'>
        <div className='app__about-container__text'>
          <p>
            I am an enthusiastic learner seeking to work with an organization which provides opportunities to apply and enhance one’s skill set, be it technical or non-technical, in exchange for a solid work ethic, integrity and commitment to superior performance.
            I have worked on a wide variety of projects that have allowed me to put what I've learned in the classroom into use in a practical sense.
            My biggest strengths are my consistency and my coolheaded approach to the challenges.
            As a part of a prestigious institution, I acknowledge as many opportunities as one can.
            I pride myself on being detail-oriented, analytical, and driven.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;