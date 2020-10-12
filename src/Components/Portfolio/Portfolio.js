import React from 'react';
import { portfolio } from '../../data/data';
import './portfolio.scss';

const Portfolio = () => {
  return(
    <section className = 'main__portfolio portfolio wow fadeInUp' data-wow-duration = '1s'>
      <div className = 'portfolio__container'>
        {portfolio.map((item, i) => {
          return(
            <div key = {i} className = 'portfolio__project project'>
              <div className = 'project__description'>
                <div className = 'project__overlay'>
                  dsadas
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
};

export default Portfolio;
