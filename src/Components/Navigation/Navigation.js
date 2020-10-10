import React from 'react';
import HeaderLink from './HeaderLink';
import {links} from '../../data/data';

const Navigation = () => {
  return (
    <nav>
      {links.map((item, i) => (
        <HeaderLink key = {i} title = {item} />
      ))}
    </nav>
  );
}

export default Navigation;
