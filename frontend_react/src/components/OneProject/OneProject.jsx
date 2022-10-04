import React from 'react';

import Feature from '../Feature/Feature';
import './oneproject.css';

const Article = ({ imgUrl, date, title, desc, link }) => {
  return (
    <div className='app__websites-container_project'>
      <div className='app__websites-container_project-image'>
        <img src={imgUrl} alt='project image' />
      </div>
      <div className='app__websites-container_project-content'>
        <div>
          <p className='app__websites-container_project-content_date'>{date}</p>
          <Feature 
            title={title}
            text={desc}
          />
          <a href={link}><p className='app__websites-container_project-content_date'>View Full Project</p></a>
        </div>
      </div>
    </div>
  )
}

export default Article;