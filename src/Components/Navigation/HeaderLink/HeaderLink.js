import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderLink = ({title}) => {
  return (
    <NavLink to = {`/${title}`}>
      {title}
    </NavLink>
  );
}

export default HeaderLink;
