import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerLink.scss';

const HeaderLink = ({ pathname }) => {
  return (
    <NavLink className = 'nav__link' activeClassName = 'nav__link--active' to = {`/${pathname.toLowerCase()}`}>
      {pathname}
    </NavLink>
  );
}

export default HeaderLink;
