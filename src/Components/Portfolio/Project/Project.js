import React, { useState } from 'react';
import './project.scss';

const Project = ({ item }) => {
  const [className, setClassName] = useState('');

  const handleClick = () => {
    if(!className) {
      setClassName('project--active');
    } else {
      setClassName('');
    }
  };

  return(
    <div onClick = {handleClick} className = {`portfolio__project project ${className}`}>
      <div className = 'project__description'>
        <picture>
          <source srcSet = {item.image.full} media = '(min-width: 768px)' />
          <source srcSet = {item.image.small} media = '(min-width: 320px)' />
          <img src = {item.image.full} />
        </picture>
      </div>
      <div className = 'project__overlay'>
        <h2>{item.title}</h2>
        <ul className = 'project__stack'>
          {item.stack.map((item, i) => (<li key = {i}>{item}</li>))}
        </ul>
        <h2>Links</h2>
        <div className = 'project__links links'>
          <a className = 'links__item' href = {item.deploy}>
            Deploy
          </a>
          <a className = 'links__item' href = {item.repo}>
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
