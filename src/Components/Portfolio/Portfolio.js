import React from 'react';
import Project from './Project';
import { portfolio } from '../../data/data';
import './portfolio.scss';

const Portfolio = () => {
  return(
    <section className = 'main__portfolio portfolio wow fadeInUp' data-wow-duration = '1s'>
      <div className = 'portfolio__container'>
        {portfolio.map((item, i) => (
          <Project key = {i} item = {item} />
        ))}
      </div>
    </section>
  )
};

export default Portfolio;
