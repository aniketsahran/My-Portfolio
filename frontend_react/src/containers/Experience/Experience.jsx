import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { urlFor, client } from '../../client';
import './experience.css';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    
    client.fetch(query).then((data) => {
      setExperience(data);
    });
  }, []);

  return (
    <div className='app__experience section__padding' id='experience'>
      <div className='app__experience-heading'>
        <h1 className='gradient__text'>
          Organizations I've worked with.
        </h1>
      </div>
      <div className='app__experience-container'>
        {experience?.map((experience) => (
            <div>
              <div className='app__experience-item__heading-bar'/>
                <div className='app__experience-item' key={experience.year}>
                  <div className='app__experience-company gradient__text'>
                    <h3>{experience.company}</h3>
                  </div>
                  <div className='app__experience-works'>
                    {experience.works.map((work) => (
                      <>
                        <div className='app__experience-work' key={work.name}>
                            <h4 className='bold-text'>{work.name}</h4>
                            <p className='p-text'>{work.year}</p>
                            <p className='p-text'>{work.desc}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Experience;