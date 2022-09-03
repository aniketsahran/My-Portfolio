import React from 'react';

import './oneproject.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='app__websites-container_project'>
      <div className='app__websites-container_project-image'>
        <img src={imgUrl} alt='project image' />
      </div>
      <div className='app__websites-container_project-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;