import React, { useState, useEffect } from 'react';

import { urlFor, client } from '../../client';
import './skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query)
      .then((data) => {
        setSkills(data);
      })
  })
  return (
    <div className='app__skills section__padding' id='skills'>
      <div className='app__skills-heading'>
        <h1 className='gradient__text'>The Things I'm Good At.</h1>
      </div>
      <div className='app__skills-content'>
          {skills.map((skill) => (
            <div className='app__skills-content__skill'>
              <div className='app__skills-content__skill-icon' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt ={skill.name} />
              </div>
              <div className='app__skills-content__skill-name'>
              <p>{skill.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Skills;