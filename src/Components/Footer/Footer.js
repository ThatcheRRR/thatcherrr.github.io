import React from 'react';
import {NavLink} from 'react-router-dom';
import {contacts} from '../../data/data';

const Footer = () => {
  return (
    <footer>
      {contacts.map((item, i) => {
        return(
          <NavLink key = {i} pathName = {item} />
        );
      })}
    </footer>
  );
}

export default Footer;
