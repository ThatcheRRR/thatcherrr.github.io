import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../../data/data';
import './social.scss';

const Social = () => {
  return(
    <nav className = 'footer__nav social'>
    {contacts.map((item, i) => {
      return(
        <a className = 'social__link' key = {i} href = {item.link} title = {item.title}>
          <FontAwesomeIcon icon = {item.image} size = '2x' color = {item.color} />
        </a>
      );
    })}
    </nav>
  );
}

export default Social;
