import React, { useState, useEffect } from 'react';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../data/data';
import './navigation.scss';

const Navigation = () => {
  const [className, setClassName] = useState('');
  const [isBurgerActive, setActiveBurger] = useState(false);

  const scrolling = () => {
    if(window.pageYOffset > 60) {
      setClassName('nav--sticky');
    } else {
      setClassName('');
    }
  };

  const handleClick = () => {
    setActiveBurger(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolling);
    window.addEventListener('load', scrolling);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener('scroll', scrolling)
  }, []);

  return (
    <nav className = {`header__nav nav ${className}`}>
      <div className = 'nav__container'>
        <Link to = '/'>
          <FontAwesomeIcon icon = {faCode} size = '2x' />
        </Link>
        <div className = 'nav__titles'>
          {links.map((item, i) => (
            <HeaderLink key = {i} pathname = {item} />
          ))}
        </div>
        {/* <div onClick = {handleClick} className = {`nav__burger burger ${isBurgerActive ? 'burger--open' : ''}`}>
          <span className = 'burger__line burger__line--first'></span>
          <span className = 'burger__line burger__line--main'></span>
          <span className = 'burger__line burger__line--last'></span>
        </div> */}
      </div>
    </nav>
  );
}

export default Navigation;
