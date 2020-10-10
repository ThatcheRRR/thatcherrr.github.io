import React from 'react';
import Navigation from '../Navigation';
import './header.scss';

const Header = ({className}) => {
  return (
    <header className = {`header ${className}`}>
      <div className = 'header__container'>
        <h1 className = 'header__author'>Pavel Osipau</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
