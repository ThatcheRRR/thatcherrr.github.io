import React from 'react';
import HeaderLink from './HeaderLink';
import {links} from '../../data/data';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav className = 'header__nav nav'>
      {links.map((item, i) => (
        <HeaderLink title = 'nav' key = {i} pathname = {item} />
      ))}
    </nav>
  );
}

export default Navigation;
