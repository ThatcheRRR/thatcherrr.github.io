import React from 'react';
import photo from './assets/photo.png';
import './about.scss';

const About = () => {
  return(
    <section className = 'main__about about'>
      <div className = 'about__container'>
        <div className = 'about__photo wow fadeInLeft' data-wow-duration = '1s'>
          <picture>
            <source />
            <img src = {photo} alt = 'my photo' />
          </picture>
        </div>
        <div className = 'about__description wow fadeInRight' data-wow-duration = '1s'>
          <div className = 'about__intro'>
            Hi! I'm a Junior Front-end developer who is in search of his first job offer <span className = 'about__smile'>:</span>
            <p>
              There are some information about me down below
            </p>
          </div>
          <article className = 'about__education theme'>
            <div className = 'theme__header'>
              <h3 className = 'theme__title'>Education</h3>
            </div>
            <ul className = 'theme__list list'>
              <li className = 'list__item item'>
                <h4 className = 'item__header'>
                  Gomel City Lyceum
                </h4>
                <p className = 'item__description'>Physics and maths</p>
              </li>
              <li className = 'list__item item'>
                <h4 className = 'item__header'>
                  Belarusian State University of Informatics and Radioelectronics
                </h4>
                <div>
                  <p className = 'item__description'>
                    The Faculty of Information Technologies and Control.
                  </p>
                  <p className = 'item__description'>Bachelors degree (2017 - Present)</p>
                </div>
              </li>
            </ul>
          </article>
          <article className = 'about__courses theme'>
            <div className = 'theme__header'>
              <h3 className = 'theme__title'>Courses</h3>
            </div>
            <ul className = 'theme__list list'>
              <li className = 'list__item item'>
                <h4 className = 'item__header'>
                  <a href = 'https://app.rs.school/certificate/mfbzwg95' target = '_blank'>
                    The Rolling Scopes School
                  </a>
                </h4>
                <p className = 'item__description'>
                  Rolling Scopes School, JS / FRONT-END (2019Q3)
                </p>
              </li>
              <li className = 'list__item item'>
                <h4 className = 'item__header'>
                  <a href = 'https://app.rs.school/certificate/i2hacko3' target = '_blank'>
                    The Rolling Scopes School
                  </a>
                </h4>
                <p className = 'item__description'>
                  Rolling Scopes School, REACT (2020Q3)
                </p>
              </li>
              <li className = 'list__item item'>
                <h4 className = 'item__header'>
                  <a href = 'https://www.freecodecamp.org/certification/fcc25c9b30f-035a-4002-aa2f-60a3a8d95db3/responsive-web-design' target = '_blank'>
                    freecodecamp.org
                  </a>
                </h4>
                <p className = 'item__description'>
                  Responsive Web Design Certification (300 hours)... and some lessons of JavaScript & React, Redux
                </p>
              </li>
            </ul>
          </article>
          <article className = 'about__skills theme'>
            <div className = 'theme__header'>
              <h3 className = 'theme__title'>Skills</h3>
            </div>
            <div className = 'theme__description'>
              HTML5, CSS3, SASS/SCSS, Git, JavaScript, React, Redux, Figma, Photoshop, Ant Design
            </div>
          </article>
        </div>
      </div>
    </section>
  )
};

export default About;
