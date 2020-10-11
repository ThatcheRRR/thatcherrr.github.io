import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import './header.scss';

const Header = ({className}) => {
  return (
    <header className = {`header ${className}`}>
      <div className = 'header__container'>
        <Link to = '/'>
          <FontAwesomeIcon icon = {faCode} size = '2x' />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
