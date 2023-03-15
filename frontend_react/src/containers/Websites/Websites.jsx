import React, { useState, useEffect } from 'react';

import { urlFor, client } from '../../client';
import { OneProject } from '../../components';
import './websites.css';

const Websites = () => {
  const [websites, setWebsites] = useState([]);
  useEffect(() => {
    const query = '*[_type == "websites"]';
    client.fetch(query)
      .then((data) => {
        setWebsites(data);
      })
  })

  return (
    <div className='app__websites' id='websites'>
      <div className='app__websites-heading gradient__text'>
        <h1>
          A lot is happening, and I'm trying to follow.
        </h1>
      </div>
      <div className='app__websites-container'>
        {websites.map((project) => (
          <div className='app__websites-container__project'>
            <OneProject 
              imgUrl={urlFor(project.imgurl)} 
              date={project.date}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Websites;