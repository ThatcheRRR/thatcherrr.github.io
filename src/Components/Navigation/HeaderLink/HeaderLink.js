import React from 'react';
import {NavLink} from 'react-router-dom';
import './headerLink.scss';

const HeaderLink = ({title, pathname}) => {
  return (
    <NavLink className = {`${title}__link`} to = {`/${pathname}`}>
      {pathname}
    </NavLink>
  );
}

export default HeaderLink;
