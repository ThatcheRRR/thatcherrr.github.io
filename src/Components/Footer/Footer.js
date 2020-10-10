import React from 'react';
import Social from '../Social';
import './footer.scss';

const Footer = () => {
  return (
    <footer className = 'footer'>
      <div className = 'footer__container'>
        <Social />
        <div className = 'footer__author'>
          © Pavel Osipau, 2020
        </div>
      </div>
    </footer>
  );
}

export default Footer;
