import React from 'react';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { links } from '../../data/data';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav className = 'header__nav nav'>
      <Link to = '/'>
        <FontAwesomeIcon icon = {faCode} size = '2x' />
      </Link>
      <div className = 'nav__titles'>
        {links.map((item, i) => (
          <HeaderLink key = {i} pathname = {item} />
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
